import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import LanguageSwitch from "./LanguageSwitch";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";
import { Language, languageContext, translations } from "../i18n";

type Command = {
  cmd: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", tab: 8 },
  { cmd: "clear", tab: 8 },
  { cmd: "contact", tab: 6 },
  { cmd: "echo", tab: 9 },
  { cmd: "education", tab: 4 },
  { cmd: "email", tab: 8 },
  { cmd: "experience", tab: 3 },
  { cmd: "github", tab: 7 },
  { cmd: "help", tab: 9 },
  { cmd: "history", tab: 6 },
  { cmd: "homelab", tab: 6 },
  { cmd: "projects", tab: 5 },
  { cmd: "publication", tab: 2 },
  { cmd: "pwd", tab: 10 },
  { cmd: "skills", tab: 7 },
  { cmd: "themes", tab: 7 },
  { cmd: "welcome", tab: 6 },
  { cmd: "whoami", tab: 7 },
];

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
  executeCommand?: (command: string) => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);
  const [language, setLanguageState] = useState<Language>(() =>
    window.localStorage.getItem("portfolio-language") === "pt" ? "pt" : "en"
  );
  const t = translations[language];

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const executeCommand = (command: string) => {
    setCmdHistory(previous => [command, ...previous]);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  // focus on input when terminal is clicked
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  // Keyboard Press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // if Tab or Ctrl + I
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds = [...hintsCmds, cmd];
        }
      });

      const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      // if there are many command to autocomplete
      if (hintsCmds.length > 1) {
        setHints(hintsCmds);
      }
      // if only one command to autocomplete
      else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );

        setHints([]);
      }
    }

    // if Ctrl + L
    if (ctrlL) {
      clearHistory();
    }

    // Go previous cmd
    if (e.key === "ArrowUp") {
      if (pointer >= cmdHistory.length) return;

      if (pointer + 1 === cmdHistory.length) return;

      setInputVal(cmdHistory[pointer + 1]);
      setPointer(prevState => prevState + 1);
      inputRef?.current?.blur();
    }

    // Go next cmd
    if (e.key === "ArrowDown") {
      if (pointer < 0) return;

      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
        return;
      }

      setInputVal(cmdHistory[pointer - 1]);
      setPointer(prevState => prevState - 1);
      inputRef?.current?.blur();
    }
  };

  // For caret position at the end
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, pointer]);

  return (
    <languageContext.Provider value={{ language, setLanguage, t }}>
      <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
        {hints.length > 1 && (
          <div>
            {hints.map(hCmd => (
              <Hints key={hCmd}>{hCmd}</Hints>
            ))}
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <label htmlFor="terminal-input">
            <TermInfo /> <MobileBr />
            <MobileSpan>&#62;</MobileSpan>
          </label>
          <Input
            title={t.inputTitle}
            type="text"
            id="terminal-input"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            autoCapitalize="off"
            ref={inputRef}
            value={inputVal}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </Form>

        {cmdHistory.map((cmdH, index) => {
          const commandArray = _.split(_.trim(cmdH), " ");
          const validCommand = _.find(commands, { cmd: commandArray[0] });
          const contextValue = {
            arg: _.drop(commandArray),
            history: cmdHistory,
            rerender,
            index,
            clearHistory,
            executeCommand,
          };
          return (
            <div key={_.uniqueId(`${cmdH}_`)}>
              <div>
                <TermInfo />
                <MobileBr />
                <MobileSpan>&#62;</MobileSpan>
                <span data-testid="input-command">{cmdH}</span>
              </div>
              {validCommand ? (
                <termContext.Provider value={contextValue}>
                  <Output index={index} cmd={commandArray[0]} />
                </termContext.Provider>
              ) : cmdH === "" ? (
                <Empty />
              ) : (
                <CmdNotFound data-testid={`not-found-${index}`}>
                  {t.commandNotFound}: {cmdH}
                </CmdNotFound>
              )}
            </div>
          );
        })}
        <LanguageSwitch />
      </Wrapper>
    </languageContext.Provider>
  );
};

export default Terminal;

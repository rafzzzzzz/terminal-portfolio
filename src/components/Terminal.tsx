import React, { createContext, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import LanguageSwitch from "./LanguageSwitch";
import theme from "./styles/themes";
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
  index: number;
  clearHistory?: () => void;
  executeCommand?: (command: string) => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const executeCommand = (command: string) => {
    const commandParts = _.split(_.trim(command), " ");
    if (
      commandParts.length === 3 &&
      commandParts[0] === "projects" &&
      commandParts[1] === "go" &&
      commandParts[2] === "1"
    ) {
      window.open(
        "https://github.com/rafzzzzzz/AirSense",
        "_blank",
        "noopener,noreferrer"
      );
    }

    setCmdHistory(previous => [command, ...previous]);
    setInputVal("");
    setHints([]);
    setPointer(-1);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
    setPointer(-1);
  };

  const handleTerminalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest("a, button, input")) inputRef.current?.focus();
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [cmdHistory, hints]);

  // Keyboard Press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // Tab completes only when there is something to complete. Shift+Tab and
    // an idle Tab retain their normal browser navigation behavior.
    if ((e.key === "Tab" && !e.shiftKey) || ctrlI) {
      if (!inputVal) {
        if (ctrlI) e.preventDefault();
        return;
      }

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds = [...hintsCmds, cmd];
        }
      });

      const inputParts = _.split(inputVal, " ");
      const isCompleteArgument =
        (inputParts.length === 3 &&
          inputParts[0] === "themes" &&
          inputParts[1] === "set" &&
          Object.hasOwn(theme, inputParts[2])) ||
        (inputParts.length === 3 &&
          inputParts[0] === "projects" &&
          inputParts[1] === "go" &&
          _.includes(["1", "2"], inputParts[2]));
      const canCompleteArgument =
        !isCompleteArgument &&
        (inputVal === "themes " ||
          (inputParts[0] === "themes" &&
            inputParts[1] !== "set" &&
            _.startsWith("set", inputParts[1])) ||
          inputVal === "themes set " ||
          (inputParts.length <= 3 && _.startsWith(inputVal, "themes set ")) ||
          inputVal === "projects " ||
          inputVal === "projects g" ||
          (inputParts.length <= 3 && _.startsWith(inputVal, "projects go ")));
      const canCompleteCommand = hintsCmds.some(cmd => cmd !== inputVal);

      if (!ctrlI && !canCompleteCommand && !canCompleteArgument) return;

      e.preventDefault();

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
      e.preventDefault();
      clearHistory();
    }

    // Go previous cmd
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pointer >= cmdHistory.length) return;

      if (pointer + 1 === cmdHistory.length) return;

      setInputVal(cmdHistory[pointer + 1]);
      setPointer(prevState => prevState + 1);
    }

    // Go next cmd
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (pointer < 0) return;

      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
        return;
      }

      setInputVal(cmdHistory[pointer - 1]);
      setPointer(prevState => prevState - 1);
    }
  };

  return (
    <languageContext.Provider value={{ language, setLanguage, t }}>
      <Wrapper
        as="main"
        data-testid="terminal-wrapper"
        ref={containerRef}
        onClick={handleTerminalClick}
      >
        <LanguageSwitch />

        <div
          role="log"
          aria-label={t.outputLabel}
          aria-live="polite"
          aria-relevant="additions"
        >
          {cmdHistory
            .map((cmdH, index) => {
              const commandArray = _.split(_.trim(cmdH), " ");
              const validCommand = _.find(commands, { cmd: commandArray[0] });
              const contextValue = {
                arg: _.drop(commandArray),
                history: cmdHistory,
                index,
                clearHistory,
                executeCommand,
              };
              return (
                <div key={`${cmdHistory.length - index}-${cmdH}`}>
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
            })
            .reverse()}
        </div>

        {hints.length > 1 && (
          <div role="status">
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
            aria-label={t.inputTitle}
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
      </Wrapper>
    </languageContext.Provider>
  );
};

export default Terminal;

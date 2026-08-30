import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";
import { useLanguage } from "../../i18n";

const Help: React.FC = () => {
  const { language, t } = useLanguage();
  const descriptions = t.commandDescriptions as Record<string, string>;

  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {descriptions[cmd]}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>
          {language === "pt" ? "Tab ou Ctrl + I" : "Tab or Ctrl + I"}&nbsp;
          =&gt; {t.shortcuts.autocomplete}
        </div>
        <div>
          {language === "pt" ? "Seta para cima" : "Up Arrow"} {generateTabs(5)}{" "}
          =&gt; {t.shortcuts.previous}
        </div>
        <div>
          Ctrl + L {generateTabs(5)} =&gt; {t.shortcuts.clear}
        </div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;

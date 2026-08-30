import { UsageDiv } from "./styles/Output.styled";
import { useLanguage } from "../i18n";

type Props = {
  cmd: "themes" | "projects";
  marginY?: boolean;
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const { language, t } = useLanguage();
  const placeholders = {
    themes: language === "pt" ? "nome-do-tema" : "theme-name",
    projects: language === "pt" ? "número-do-projeto" : "project-number",
  };
  const examples = { themes: "catppuccin", projects: "1" };
  const action = cmd === "themes" ? "set" : "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      {t.usage}: {cmd} {action} &#60;{placeholders[cmd]}&#62; <br />
      {t.example}: {cmd} {action} {examples[cmd]}
    </UsageDiv>
  );
};

export default Usage;

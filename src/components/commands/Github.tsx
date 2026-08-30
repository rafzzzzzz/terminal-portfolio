import { useLanguage } from "../../i18n";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

const githubUrl = "https://github.com/rafzzzzzz";

const Github = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="github">
      <div>{t.githubPrompt}</div>
      <Link href={githubUrl}>{githubUrl}</Link>
    </Wrapper>
  );
};

export default Github;

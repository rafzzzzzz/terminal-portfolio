import { useLanguage } from "../../i18n";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

const Email: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="email">
      <div>{t.emailPrompt}</div>
      <Link href="mailto:rafael@marques.com">rafael@marques.com</Link>
    </Wrapper>
  );
};

export default Email;

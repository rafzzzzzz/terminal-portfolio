import { useLanguage } from "../../i18n";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="contact">
      <EduIntro>{t.contact.intro}</EduIntro>
      <EduList>
        <div className="title">Email</div>
        <div className="desc">
          <Link href="mailto:rafael@marques.com">rafael@marques.com</Link>
        </div>
      </EduList>
      <EduList>
        <div className="title">{t.contact.location}</div>
        <div className="desc">Trancoso, Guarda, Portugal</div>
      </EduList>
      <EduList>
        <div className="title">{t.contact.workplace}</div>
        <div className="desc">Escola Profissional de Trancoso</div>
      </EduList>
      <EduList>
        <div className="title">GitHub</div>
        <div className="desc">
          <Link href="https://github.com/rafzzzzzz">
            https://github.com/rafzzzzzz
          </Link>
        </div>
      </EduList>
    </Wrapper>
  );
};

export default Contact;

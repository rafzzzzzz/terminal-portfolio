import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { useLanguage } from "../../i18n";

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <AboutWrapper data-testid="about">
      <p>
        <HighlightSpan>{t.about[0]}</HighlightSpan>
      </p>
      <p>
        <HighlightAlt>{t.about[1]}</HighlightAlt>
      </p>
      <p>{t.about[2]}</p>
    </AboutWrapper>
  );
};

export default About;

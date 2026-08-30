import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { useLanguage } from "../../i18n";

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="experience">
      <EduIntro>{t.experience.intro}</EduIntro>
      <EduList>
        <div className="title">{t.experience.role}</div>
        <div className="desc">{t.experience.employer}</div>
      </EduList>
      <EduList>
        <div className="title">{t.experience.teachingTitle}</div>
        <div className="desc">{t.experience.teaching}</div>
      </EduList>
      <EduList>
        <div className="title">{t.experience.practicalTitle}</div>
        <div className="desc">{t.experience.practical}</div>
      </EduList>
      <EduList>
        <div className="desc">{t.experience.boundary}</div>
      </EduList>
    </Wrapper>
  );
};

export default Experience;

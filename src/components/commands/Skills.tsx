import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { useLanguage } from "../../i18n";

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="skills">
      <EduIntro>{t.skills.intro}</EduIntro>
      {t.skills.items.map(([title, desc]) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Skills;

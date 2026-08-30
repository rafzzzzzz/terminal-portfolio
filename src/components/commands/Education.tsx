import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";
import { useLanguage } from "../../i18n";

const Education: React.FC = () => {
  const { t } = useLanguage();
  const education = [
    { title: t.education.degree, desc: t.education.degreeSchool },
    { title: t.education.course, desc: t.education.courseSchool },
  ];

  return (
    <Wrapper data-testid="education">
      <EduIntro>{t.education.intro}</EduIntro>
      {education.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

export default Education;

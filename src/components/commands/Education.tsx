import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Educational background</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BSc in Computer Engineering",
    desc: "Polytechnic Institute of Guarda | 2023",
  },
  {
    title: "CET in Multimedia Product Development",
    desc: "Polytechnic Institute of Guarda | 2014",
  },
];

export default Education;

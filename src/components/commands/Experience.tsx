import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => (
  <Wrapper data-testid="experience">
    <EduIntro>Professional experience</EduIntro>
    <EduList>
      <div className="title">IT Teacher</div>
      <div className="desc">
        Escola Profissional de Trancoso | 2024 - present
      </div>
    </EduList>
    <EduList>
      <div className="title">Subjects and modules</div>
      <div className="desc">
        Computer networks, digital systems, computer architecture, data
        communications, operating systems, devices and peripherals, network
        protocols, transmission media, network installation and configuration,
        and microprocessor architecture and programming.
      </div>
    </EduList>
  </Wrapper>
);

export default Experience;

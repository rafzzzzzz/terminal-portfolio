import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const skills = [
  ["Systems", "Linux, Unraid, Windows, macOS"],
  ["Networks", "TCP/IP, DHCP, DNS, Cisco Packet Tracer, troubleshooting"],
  ["Embedded and hardware", "ESP32, Arduino, PCB design, PC building"],
  ["Infrastructure", "Docker, VirtualBox, NAS, backups, self-hosted services"],
  ["Programming", "C++, Java, HTML, CSS"],
  ["Multimedia", "Photography, audio/video editing, 3D modelling and printing"],
  ["Languages", "Portuguese (native), English (advanced)"],
];

const Skills: React.FC = () => (
  <Wrapper data-testid="skills">
    <EduIntro>Technical skills and languages</EduIntro>
    {skills.map(([title, desc]) => (
      <EduList key={title}>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </EduList>
    ))}
  </Wrapper>
);

export default Skills;

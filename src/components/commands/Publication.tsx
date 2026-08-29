import { Link } from "../styles/Welcome.styled";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";

const Publication: React.FC = () => (
  <div data-testid="publication">
    <ProjectsIntro>Scientific publication</ProjectsIntro>
    <ProjectContainer>
      <ProjectTitle>
        AirSense: Low-Cost Indoor Air Quality Monitoring Wireless System
      </ProjectTitle>
      <ProjectDesc>
        Published by Springer in New Trends in Disruptive Technologies, Tech
        Ethics, and Artificial Intelligence (DiTTEt 2024). The system uses an
        ESP32 and environmental sensors to monitor CO2, VOCs, particulate
        matter, temperature, humidity, and atmospheric pressure, with InfluxDB
        and Grafana for data storage and visualization.
      </ProjectDesc>
      <Link href="https://doi.org/10.1007/978-3-031-66635-3_23">
        DOI: 10.1007/978-3-031-66635-3_23
      </Link>
    </ProjectContainer>
  </div>
);

export default Publication;

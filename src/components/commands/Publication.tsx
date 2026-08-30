import { Link } from "../styles/Welcome.styled";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { useLanguage } from "../../i18n";

const Publication: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="publication">
      <ProjectsIntro>{t.publication.intro}</ProjectsIntro>
      <ProjectContainer>
        <ProjectTitle>
          AirSense: Low-Cost Indoor Air Quality Monitoring Wireless System
        </ProjectTitle>
        <ProjectDesc>{t.publication.description}</ProjectDesc>
        <Link href="https://doi.org/10.1007/978-3-031-66635-3_23">
          DOI: 10.1007/978-3-031-66635-3_23
        </Link>
      </ProjectContainer>
    </div>
  );
};

export default Publication;

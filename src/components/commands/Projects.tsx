import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { useLanguage } from "../../i18n";
import { Link } from "../styles/Welcome.styled";
import Homelab from "./Homelab";

const airsenseUrl = "https://github.com/rafzzzzzz/AirSense";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const { language, t } = useLanguage();

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      parseInt(arg[1]) === 1 && window.open(airsenseUrl, "_blank");
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2"]) ? <Usage cmd="projects" /> : null;

  if (arg.length > 0 || arg.length > 2) {
    if (checkArg()) return checkArg();
    if (arg[1] === "2") return <Homelab />;
    return (
      <div data-testid="projects">
        <Link href={airsenseUrl}>{airsenseUrl}</Link>
      </div>
    );
  }

  return (
    <div data-testid="projects">
      <ProjectsIntro>{t.projects.intro}</ProjectsIntro>
      <ProjectContainer>
        <ProjectTitle>1. AirSense</ProjectTitle>
        <ProjectDesc>{t.projects.airsense}</ProjectDesc>
        <Link href={airsenseUrl}>{airsenseUrl}</Link>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectTitle>
          2.{" "}
          {language === "pt"
            ? "Laboratório doméstico pessoal com Unraid"
            : "Personal Unraid home lab"}
        </ProjectTitle>
        <ProjectDesc>{t.projects.homelab}</ProjectDesc>
      </ProjectContainer>
      <Usage cmd="projects" marginY />
    </div>
  );
};

export default Projects;

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

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Selected projects spanning IoT, infrastructure, and open-source desktop
        tooling.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "AirSense",
    desc: "A low-cost ESP32 system for monitoring indoor air quality, featuring InfluxDB, Grafana, a custom PCB, and a 3D-printed enclosure.",
    url: "https://github.com/rafzzzzzz/AirSense",
  },
  {
    id: 2,
    title: "Unraid Theme Studio",
    desc: "A visual theme editor for the Unraid 7.2+ web interface, informed by hands-on home lab and self-hosting experience.",
    url: "https://github.com/rafzzzzzz/unraid-theme-studio",
  },
  {
    id: 3,
    title: "Omareddit",
    desc: "A native Reddit client for the Omarchy desktop shell.",
    url: "https://github.com/rafzzzzzz/omareddit",
  },
  {
    id: 4,
    title: "Network Cable Leaderboard",
    desc: "A static leaderboard that turns classroom network cable assembly into a student competition.",
    url: "https://github.com/rafzzzzzz/leaderboard_cabos",
  },
];

export default Projects;

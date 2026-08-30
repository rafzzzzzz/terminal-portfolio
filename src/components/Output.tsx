import About from "./commands/About";
import Clear from "./commands/Clear";
import Contact from "./commands/Contact";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import Experience from "./commands/Experience";
import GeneralOutput from "./commands/GeneralOutput";
import Github from "./commands/Github";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Homelab from "./commands/Homelab";
import Projects from "./commands/Projects";
import Publication from "./commands/Publication";
import Skills from "./commands/Skills";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";
import { useLanguage } from "../i18n";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);
  const { language, t } = useLanguage();

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // Example: about extra-argument
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return (
      <UsageDiv data-testid="usage-output">
        {t.usage}: {cmd}
      </UsageDiv>
    );

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          contact: <Contact />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          experience: <Experience />,
          github: <Github />,
          help: <Help />,
          history: <History />,
          homelab: <Homelab />,
          projects: <Projects />,
          publication: <Publication />,
          pwd: <GeneralOutput>/home/rafael</GeneralOutput>,
          skills: <Skills />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: (
            <GeneralOutput>
              {language === "pt" ? "visitante" : "visitor"}
            </GeneralOutput>
          ),
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;

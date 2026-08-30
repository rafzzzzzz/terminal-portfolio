import { useContext } from "react";
import { useLanguage } from "../../i18n";
import { termContext } from "../Terminal";
import {
  Cmd,
  CommandButton,
  CommandSuggestions,
  HeroContainer,
  Identity,
  PreName,
  PreNameMobile,
  PreWrapper,
  Separator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const { executeCommand } = useContext(termContext);
  const { t } = useLanguage();
  const suggestions = [
    "about",
    "skills",
    "experience",
    "homelab",
    "projects",
    "github",
    "contact",
  ];

  return (
    <HeroContainer data-testid="welcome">
      <div>
        <PreName>
          {String.raw`
  ___       __          _   __  __
 | _ \__ _ / _|__ _ ___| | |  \/  |__ _ _ _ __ _ _  _ ___ ___
 |   / _' |  _/ _' / -_) | | |\/| / _' | '_/ _' | || / -_|_-<
 |_|_\__,_|_| \__,_\___|_| |_|  |_\__,_|_| \__, |\_,_\___/__/
                                              |_|
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {String.raw`
  ___       __          _
 | _ \__ _ / _|__ _ ___| |
 |   / _' |  _/ _' / -_) |
 |_|_\__,_|_| \__,_\___|_|

  __  __
 |  \/  |__ _ _ _ __ _ _  _ ___ ___
 | |\/| / _' | '_/ _' | || / -_|_-<
 |_|  |_\__,_|_| \__, |\_,_\___/__/
                    |_|
            `}
          </PreNameMobile>
        </PreWrapper>
        <Identity>Rafael Marques</Identity>
        <div>{t.welcome.focus}</div>
        <div>{t.welcome.location}</div>
        <Separator>----</Separator>
        <div>{t.welcome.intro}</div>
        <Separator>----</Separator>
        <div>{t.welcome.suggestions}</div>
        <CommandSuggestions aria-label={t.welcome.suggestions}>
          {suggestions.map(command => (
            <CommandButton
              key={command}
              type="button"
              onClick={() => executeCommand?.(command)}
            >
              <Cmd>{command}</Cmd>
            </CommandButton>
          ))}
        </CommandSuggestions>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

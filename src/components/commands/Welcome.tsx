import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Separator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
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
        <div>
          Computer engineering, computer networks, embedded systems, and
          teaching.
        </div>
        <Separator>----</Separator>
        <div>
          This project's source code is available in its{" "}
          <Link href="https://github.com/rafzzzzzz/terminal-portfolio">
            GitHub repository
          </Link>
          .
        </div>
        <Separator>----</Separator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

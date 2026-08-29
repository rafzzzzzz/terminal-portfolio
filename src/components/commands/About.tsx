import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Rafael Marques</HighlightSpan>.
      </p>
      <p>
        I'm a{" "}
        <HighlightAlt>
          computer engineering graduate and IT teacher
        </HighlightAlt>{" "}
        based in Trancoso, Portugal.
      </p>
      <p>
        I work across computer networks, operating systems, hardware, and
        embedded systems, with a practical focus on Linux, self-hosting, and
        IoT.
      </p>
    </AboutWrapper>
  );
};

export default About;

import { useContext, useEffect } from "react";
import { termContext } from "../Terminal";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

const githubUrl = "https://github.com/rafzzzzzz";

const Github = () => {
  const { history, rerender } = useContext(termContext);

  useEffect(() => {
    if (rerender && history[0]?.trim() === "github") {
      window.open(githubUrl, "_blank");
    }
  }, [history, rerender]);

  return (
    <Wrapper data-testid="github">
      <Link href={githubUrl}>{githubUrl}</Link>
    </Wrapper>
  );
};

export default Github;

import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
import { useLanguage } from "../i18n";

const TermInfo = () => {
  const { language } = useLanguage();

  return (
    <Wrapper>
      <User>{language === "pt" ? "visitante" : "visitor"}</User>@
      <WebsiteName>rafael-marques</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;

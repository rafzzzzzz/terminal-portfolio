import { useLanguage } from "../../i18n";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Homelab = () => {
  const { t } = useLanguage();

  return (
    <Wrapper data-testid="homelab">
      <EduIntro>{t.homelab.intro}</EduIntro>
      <EduList>
        <div className="desc">{t.homelab.summary}</div>
      </EduList>
      <EduList>
        <div className="title">{t.homelab.workTitle}</div>
        <div className="desc">{t.homelab.work}</div>
      </EduList>
      <EduList>
        <div className="title">{t.homelab.servicesTitle}</div>
        <div className="desc">{t.homelab.services}</div>
      </EduList>
    </Wrapper>
  );
};

export default Homelab;

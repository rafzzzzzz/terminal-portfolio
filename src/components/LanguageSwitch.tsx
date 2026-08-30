import { useLanguage } from "../i18n";
import { LanguageButton, LanguageControls } from "./styles/Terminal.styled";

const LanguageSwitch = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <LanguageControls aria-label={t.languageLabel}>
      <span>{t.languageLabel}</span>
      <LanguageButton
        type="button"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </LanguageButton>
      <span>/</span>
      <LanguageButton
        type="button"
        aria-pressed={language === "pt"}
        onClick={() => setLanguage("pt")}
      >
        PT
      </LanguageButton>
    </LanguageControls>
  );
};

export default LanguageSwitch;

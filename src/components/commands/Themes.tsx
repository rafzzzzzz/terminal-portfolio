import { useContext, useEffect, useRef } from "react";
import _ from "lodash";
import { themeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import { isArgInvalid } from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";
import Usage from "../Usage";
import { useLanguage } from "../../i18n";

const myThemes = _.keys(theme);

const Themes: React.FC = () => {
  const { arg, index } = useContext(termContext);
  const { language } = useLanguage();
  const themeSwitcher = useContext(themeContext);
  const appliedTheme = useRef(false);
  const action = arg[0];
  const selectedTheme = arg[1];

  useEffect(() => {
    if (
      !appliedTheme.current &&
      index === 0 &&
      arg.length === 2 &&
      action === "set" &&
      _.includes(myThemes, selectedTheme)
    ) {
      appliedTheme.current = true;
      themeSwitcher?.(theme[selectedTheme]);
    }
  }, [action, arg.length, index, selectedTheme, themeSwitcher]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "set", myThemes) ? <Usage cmd="themes" /> : null;

  return arg.length > 0 ? (
    checkArg()
  ) : (
    <Wrapper data-testid="themes">
      <div>{language === "pt" ? "Temas disponíveis" : "Available themes"}</div>
      <ThemesWrapper>
        {myThemes.map(myTheme => (
          <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
        ))}
      </ThemesWrapper>
      <Usage cmd="themes" marginY />
    </Wrapper>
  );
};

export default Themes;

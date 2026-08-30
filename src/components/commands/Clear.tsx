import { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { useLanguage } from "../../i18n";

const Clear: React.FC = () => {
  const { arg, clearHistory } = useContext(termContext);
  const { t } = useLanguage();
  useEffect(() => {
    if (arg.length < 1) clearHistory?.();
  }, []);
  return arg.length > 0 ? <UsageDiv>{t.usage}: clear</UsageDiv> : <></>;
};

export default Clear;

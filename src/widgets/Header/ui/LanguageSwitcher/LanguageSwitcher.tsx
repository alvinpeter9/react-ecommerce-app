import { useTranslation } from "react-i18next";

import { languageListIcon, type SupportedLngsType } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as SupportedLngsType;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      <AppIcon Icon={languageListIcon[currentLanguage]} />
    </Button>
  );
};

export default LanguageSwitcher;

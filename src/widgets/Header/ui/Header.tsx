import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";


import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPinIcon from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";
import { routePaths } from "@/shared/config";
import { AppIcon, Button, Input } from "@/shared/ui";

import styles from "./Header.module.scss";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <LogoIcon className={styles.logo} />
        <Button variant="ghost">
          <AppIcon Icon={MapPinIcon} />
          <span>10115 New York</span>
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          placeholder={t("HEADER.SEARCHBY")}
          rounded
          Icon={<AppIcon size={18} Icon={SearchIcon} theme="background" />}
        />
      </div>
      <div className={styles.section}>
        <Button variant="secondary">{t("HEADER.CART_BTN")}</Button>
        <Button variant="outline" onClick={handleLoginClick}>
          <AppIcon Icon={UserIcon} />
          <span>{t("HEADER.LOGIN_BTN")}</span>
        </Button>

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;

import { useTranslation } from "react-i18next";

import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react";
import { Button } from "@/shared/ui";

import styles from "./PageError.module.scss";

const PageError = () => {
  const { t } = useTranslation();

  const handleReloadClick = () => {
    location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PageErrorIcon className={styles.icon} />
        <h3 className={styles.title}>{t("PAGE_ERROR.TITLE")}</h3>
        <p className={styles.description}>{t("PAGE_ERROR.DESCRIPTION")}</p>
        <Button
          onClick={handleReloadClick}
          variant="primary"
          shape="rounded"
          className={styles.button}
        >
          {t("PAGE_ERROR.RELOAD_BTN")}
        </Button>
      </div>
    </div>
  );
};

export default PageError;

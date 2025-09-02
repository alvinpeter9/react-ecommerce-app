import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { Button } from "@/shared/ui";
import NotFoundIcon from "@/shared/assets/icons/NotFound.svg?react";
import { useNavigate } from "react-router";
import { routePaths } from "@/shared/config";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (window.history.length < 1) {
      navigate(routePaths.home);
      return;
    }
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <NotFoundIcon className={styles.icon} />
        <h3 className={styles.title}>{t("NOT_FOUND.TITLE")}</h3>
        <p className={styles.description}>{t("NOT_FOUND.DESCRIPTION")}</p>
        <Button
          onClick={handleClickBack}
          variant="primary"
          shape="rounded"
          className={styles.button}
        >
          {t("NOT_FOUND.BACK_BTN")}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

import { useTranslation } from "react-i18next";
import styles from "./PageLoader.module.scss";
import { Spinner } from "@/shared/ui";

const PageLoader = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t("PAGE_LOADER.LOADING")}</h3>
      <Spinner />
    </div>
  );
};

export default PageLoader;

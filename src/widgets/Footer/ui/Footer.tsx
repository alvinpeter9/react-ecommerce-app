import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import { Link } from "react-router";
import { routePaths } from "@/shared/config";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoIcon className={styles.icon} />

        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("FOOTER.ABOUT")}</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.ABOUT_US")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.ABOUT_US")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.ABOUT_US")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("FOOTER.QUICK_LINKS")}</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.FAQS")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.RECIPES")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.CONTACT")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("FOOTER.HELP_SUPPORT")}</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.TERMS_OF_SERVICE")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.PRIVACY_POLICY")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.RETURN_POLICY")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("FOOTER.COMPANY")}</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.BLOG")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.CONTACT")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t("FOOTER.FOLLOW_US")}</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.FACEBOOK")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.INSTAGRAM")}
                </Link>
              </li>
              <li>
                <Link to={routePaths.home} className={styles.link}>
                  {t("FOOTER.TWITTER")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        {t("FOOTER.COPYRIGHT", {
          year: new Date().getFullYear(),
          company: "YourCompany",
        })}
      </div>
    </footer>
  );
};

export default Footer;

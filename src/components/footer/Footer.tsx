import type { FC } from "react";
import styles from "./Footer.module.css";
import FooterRegister from "./footerRegister/FooterRegister";
import FooterMain from "./footerMain/FooterMain";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterRegister />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
};

export default Footer;

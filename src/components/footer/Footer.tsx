import type { FC } from "react";
import styles from "./Footer.module.css";
import NavieduInfo from "./NavieduInfo";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import FooterIntro from "./FooterIntro";
import FooterRegister from "./FooterRegister";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterRegister />
      <div className={styles.footerMain}>
        <FooterIntro />
        <NavieduInfo />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

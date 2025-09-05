import type { FC } from "react";
import styles from "./FooterMain.module.css";
import { navieduServices } from "../../../data/navieduServices";
import NavieduInfo from "./navieduInfo/NavieduInfo";
import FooterContact from "./footerContact/FooterContact";
import FooterIntro from "./footerIntro/FooterIntro";

const FooterMain: FC = () => {
  return (
    <div className={styles.footerMain}>
      <FooterIntro />
      {navieduServices.map((service, index) => (
        <NavieduInfo key={index} service={service} />
      ))}

      <FooterContact />
    </div>
  );
};

export default FooterMain;

import type { FC } from "react";
import styles from "./FooterBottom.module.css";

const FooterBottom: FC = () => {
  return (
    <div className={styles.footerBottom}>
      <p>&#169; 2024 NaviEdu | All rights reserved</p>
      <p>Designed by MytNivalis</p>
    </div>
  );
};

export default FooterBottom;

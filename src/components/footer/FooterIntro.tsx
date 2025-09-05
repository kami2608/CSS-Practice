import type { FC } from "react";
import Medias from "./Medias";
import styles from "./Footer.module.css";
import logo from "../../assets/logo/Mask_logo.png";

const FooterIntro: FC = () => {
  return (
    <div className={styles.footerIntro}>
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>
      <p>
        Là nền tảng học tập ứng dụng công nghệ AI và các phương pháp giáo dục
        hiện đại trên thế giới nhằm cung cấp trải nghiệm học tập cá nhân hóa cho
        học sinh phổ thông (K12) tại Việt Nam.
      </p>
      <Medias />
    </div>
  );
};

export default FooterIntro;

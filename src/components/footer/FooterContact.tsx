import type { FC } from "react";
import styles from "./Footer.module.css";

const FooterContact: FC = () => {
  return (
    <>
      <div className={styles.footerContact}>
        <h1 className={styles.footerTitle}>liên hệ</h1>
        <ul className={styles.footerLinks}>
          <li className={styles.address}>
            123 Đường ABC, Phường Hoàng Liệt, Quận Hoàng Mai, Thành phố Hà Nội,
            Việt Nam
          </li>
          <li className={styles.phone}>(+00) 123-456-789</li>
          <li className={styles.mail}>contact@mysite.com</li>
          <li className={styles.web}>www.mysite.com</li>
        </ul>
      </div>
    </>
  );
};

export default FooterContact;

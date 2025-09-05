import type { FC } from "react";
import styles from "./Footer.module.css";
import Input from "../common/input/Input";
import mail from "../../assets/icons/mail_register.png";
import Button from "../common/button/Button";

const FooterRegister: FC = () => {
  return (
    <div className={styles.footerRegister}>
      <div className={styles.registerLabel}>
        <img src={mail} alt="Emal register" />
        <h1>đăng ký nhận tin ngay hôm nay</h1>
      </div>
      <form className={styles.registerForm}>
        <Input placeholder="Nhập email của bạn..." />
        <Button type="submit">ĐĂNG KÝ NGAY</Button>
      </form>
    </div>
  );
};

export default FooterRegister;

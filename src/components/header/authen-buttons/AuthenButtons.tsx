import type { FC, HTMLAttributes } from "react";
import Button from "../../common/button/Button";
import styles from "./AuthenButtons.module.css";
import clsx from "clsx";

interface AuthenButtonsProps extends HTMLAttributes<HTMLElement> {}

const AuthenButtons: FC<AuthenButtonsProps> = ({ ...props }) => {
  return (
    <div {...props} className={clsx(styles.authenBtns, props.className)}>
      <Button className={styles.loginBtn}>Đăng ký</Button>
      <Button className={styles.signupBtn}>Đăng Nhập</Button>
    </div>
  );
};

export default AuthenButtons;

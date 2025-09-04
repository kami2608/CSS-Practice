import type { FC } from "react";
import styles from "./Header.module.css";
import { menuOptions } from "../../paths/MenuOptions";
import Button from "../common/button/Button";

const MenuPC: FC = () => {
  return (
    <>
      <nav className={styles.menuPC}>
        {menuOptions.map((menu, index) => (
          <a key={index} href={menu.link}>
            {menu.title}
          </a>
        ))}
      </nav>
      <div className={styles.btnPC}>
        <Button className={styles.loginBtn}>Đăng ký</Button>
        <Button className={styles.signupBtn}>Đăng Nhập</Button>
      </div>
    </>
  );
};

export default MenuPC;

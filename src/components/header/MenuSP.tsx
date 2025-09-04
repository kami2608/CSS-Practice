import type { FC } from "react";
import Button from "../common/button/Button";
import { IoClose } from "react-icons/io5";
import styles from "./Header.module.css";
import { menuOptions } from "../../paths/MenuOptions";
import clsx from "clsx";
import iconMenu from "../../assets/IconMenu.png";

interface MenuSPProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuSP: FC<MenuSPProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {!isMenuOpen && (
        <div className={styles.btnControllerSP}>
          <Button onClick={() => setIsMenuOpen(true)}>
            <img src={iconMenu} alt="Menu button" />
          </Button>
        </div>
      )}
      {isMenuOpen && (
        <div className={styles.btnControllerSP}>
          <Button onClick={() => setIsMenuOpen(false)}>
            <IoClose className={styles.btnIcon} />
          </Button>
        </div>
      )}

      <nav className={clsx(styles.menuSP, isMenuOpen && styles.menuSPOpen)}>
        {menuOptions.map((menu, index) => {
          return location.pathname === menu.link ? (
            <a key={index} href={menu.link} className={styles.active}>
              {menu.title}
            </a>
          ) : (
            <a key={index} href={menu.link}>
              {menu.title}
            </a>
          );
        })}
        <div className={styles.btnSP}>
          <Button className={styles.loginBtn}>Đăng ký</Button>
          <Button className={styles.signupBtn}>Đăng Nhập</Button>
        </div>
      </nav>
    </>
  );
};

export default MenuSP;

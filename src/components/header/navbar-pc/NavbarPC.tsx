import type { FC } from "react";
import styles from "./NavbarPC.module.css";
import { menuOptions } from "../../../paths/MenuOptions";
import AuthenButtons from "../authen-buttons/AuthenButtons";
import NavbarItem from "./navbar-items-pc/NavbarItem";

const NavbarPC: FC = () => {
  return (
    <div className={styles.PC}>
      <nav className={styles.navbarPC}>
        {menuOptions.map((menu, index) => (
          <NavbarItem menu={menu} index={index} />
        ))}
      </nav>
      <AuthenButtons/>
    </div >
  );
};

export default NavbarPC;

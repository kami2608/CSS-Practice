import type { FC } from "react";
import styles from "./NavbarPC.module.css";
import { menuOptions } from "../../../paths/MenuOptions";
import NavbarItem from "../navbar-items/NavbarItem";
import AuthenButtons from "../authen-buttons/AuthenButtons";

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

import { type FC } from "react";
import styles from "./NavbarSP.module.css";
import clsx from "clsx";
import { menuOptions } from "../../../paths/MenuOptions";
import NavbarItem from "../navbar-items/NavbarItem";
import AuthenButtons from "../authen-buttons/AuthenButtons";
interface NavbarSPProps {
  isMenuOpen: boolean;
}

const NavbarSP: FC<NavbarSPProps> = ({ isMenuOpen }) => {
  return (
    <>
      <nav className={clsx(styles.navbarSP, isMenuOpen && styles.navbarSPOpen)}>
        {menuOptions.map((menu, index) => (
          <NavbarItem menu={menu} index={index} />
        ))}
        <AuthenButtons/>
      </nav>
    </>
  );
};

export default NavbarSP;

import { useState, type FC } from "react";
import styles from "./NavbarSP.module.css";
import clsx from "clsx";
import { menuOptions } from "../../../paths/MenuOptions";
import AuthenButtons from "../authen-buttons/AuthenButtons";
import ControllerButtonsSP from "./controller-buttons-sp/ControllerButtonsSP";
import NavbarItem from "./navbar-items-sp/NavbarItem";

const NavbarSP: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <ControllerButtonsSP
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <nav className={clsx(styles.navbarSP, isMenuOpen && styles.navbarSPOpen)}>
        {menuOptions.map((menu, index) => (
          <NavbarItem menu={menu} index={index} />
        ))}
        <AuthenButtons />
      </nav>
    </>
  );
};

export default NavbarSP;

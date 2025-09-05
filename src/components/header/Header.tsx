import { useState, type FC } from "react";
import Logo from "./logo/Logo";
import NavbarPC from "./navbar-pc/NavbarPC";
import NavbarSP from "./navbar-sp/NavbarSP";
import ControllerButtonsSP from "./controller-buttons-sp/ControllerButtonsSP";
import styles from "./Header.module.css";


const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Logo />
      <ControllerButtonsSP
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <NavbarPC />
      <NavbarSP isMenuOpen={isMenuOpen} /> 
    </header>
  );
};

export default Header;

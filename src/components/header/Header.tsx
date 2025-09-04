import { useState, type FC } from "react";
import styles from "./Header.module.css";
import MenuPC from "./MenuPC";
import MenuSP from "./MenuSP";
import logo from "../../assets/Logo.png";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img src={logo} alt="logo" />
      </a>
      <MenuPC />
      <MenuSP isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;

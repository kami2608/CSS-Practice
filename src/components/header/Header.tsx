import { useState, type FC } from "react";
import styles from "./Header.module.css";
import MenuPC from "./MenuPC";
import MenuSP from "./MenuSP";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img src="src\assets\Logo.png" alt="logo" />
      </a>
      <MenuPC />
      <MenuSP isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;

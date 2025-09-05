import { useEffect, useState, type FC } from "react";
import Logo from "./logo/Logo";
import NavbarPC from "./navbar-pc/NavbarPC";
import NavbarSP from "./navbar-sp/NavbarSP";
import styles from "./Header.module.css";

const Header: FC = () => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    function handleResize() {
      setIsPC(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      {isPC ? <NavbarPC /> : <NavbarSP />}
    </header>
  );
};

export default Header;

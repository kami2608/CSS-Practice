import type { FC } from "react";
import styles from "./Logo.module.css";
import logo from "../../../assets/Logo.png";

const Logo: FC = () => {
  return (
    <a className={styles.logo} href="#">
      <img src={logo} alt="Logo" />
    </a>
  );
};

export default Logo;

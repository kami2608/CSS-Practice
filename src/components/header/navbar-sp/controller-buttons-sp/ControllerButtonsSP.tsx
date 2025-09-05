import type { FC } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ControllerButtonsSP.module.css";
import iconMenu from "../../../../assets/IconMenu.png";
import Button from "../../../common/button/Button";

interface ControllerButtonsSPProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControllerButtonsSP: FC<ControllerButtonsSPProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className={styles.btnControllerSP}>
      {isMenuOpen ? (
        <Button onClick={() => setIsMenuOpen(false)}>
          <IoClose className={styles.btnIcon} />
        </Button>
      ) : (
        <Button onClick={() => setIsMenuOpen(true)}>
          <img src={iconMenu} alt="Menu button" />
        </Button>
      )}
    </div>
  );
};
export default ControllerButtonsSP;

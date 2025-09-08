import type { FC } from "react";
import styles from "./LeftRightBtns.module.css";
import icon from "../../../assets/hero/Left-right.png";

interface LeftRightBtnsProps {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const LeftRightBtns: FC<LeftRightBtnsProps> = ({
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}) => {
  return (
    <div className={styles.leftRightBtns}>
      <button disabled={!hasPrev} onClick={onPrev} className={styles.leftBtn}>
        <img src={icon} alt="Prev Button" />
      </button>
      <button disabled={!hasNext} onClick={onNext} className={styles.rightBtn}>
        <img src={icon} alt="Next Button" />
      </button>
    </div>
  );
};

export default LeftRightBtns;

import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./SlideButton.module.css";
import clsx from "clsx";

interface SlideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const SlideButton: FC<SlideButtonProps> = ({ isActive, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        isActive ? styles.slideBtnActive : styles.slideBtn,
        props.className
      )}
    ></button>
  );
};

export default SlideButton;

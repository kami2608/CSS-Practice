import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={clsx(styles.btn, props.className)}>
      {children}
    </button>
  );
};

export default Button;

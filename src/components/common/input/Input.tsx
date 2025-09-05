import type { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className={clsx(styles.input, props.className)} />;
};

export default Input;

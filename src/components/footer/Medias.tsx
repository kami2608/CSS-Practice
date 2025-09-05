import type { FC } from "react";
import { mediaOptions } from "../../data/mediaOptions";
import styles from "./Footer.module.css";

const Medias: FC = () => {
  return (
    <div className={styles.footerMedia}>
      {mediaOptions.map((media, index) => (
        <a key={index} href={media.href}>
          <img src={media.icon} alt={media.alt} />
        </a>
      ))}
    </div>
  );
};

export default Medias;

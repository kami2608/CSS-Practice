import type { FC } from "react";
import styles from "./Medias.module.css";
import { mediaOptions } from "../../../../../data/mediaOptions";

const Medias: FC = () => {
  return (
    <div className={styles.medias}>
      {mediaOptions.map((media, index) => (
        <a key={index} href={media.href}>
          <img src={media.icon} alt={media.alt} />
        </a>
      ))}
    </div>
  );
};

export default Medias;

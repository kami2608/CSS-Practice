import type { FC } from "react";
import styles from "./TopicHero.module.css";
import line from "../../../../assets/title_underline.png";
import type { Title } from "../../../../types/Title.type";

interface TopicProps {
  title: Title[];
  description: string;
}

const TopicHero: FC<TopicProps> = ({ title, description }) => {
  return (
    <div className={styles.topic}>
      <h3>NAVIEDU | DẪN BƯỚC THÀNH CÔNG</h3>
      <h1 className={styles.title}>
        {title.map((text, index) =>
          text.highlight ? (
            <span key={index} className={styles.highlight}>
              {" "}
              <img src={line} />
              {text.text}{" "}
            </span>
          ) : (
            <span key={index}>{text.text}</span>
          )
        )}
      </h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TopicHero;

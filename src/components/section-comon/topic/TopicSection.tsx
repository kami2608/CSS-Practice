import type { FC } from "react";
import type { Title } from "../../../types/Title.type";
import styles from "./TopicSection.module.css";
import line from "../../../assets/title_underline.png";

interface TopicSectionProps {
  subTitle: string;
  title: Title[];
}

const TopicSection: FC<TopicSectionProps> = ({ subTitle, title }) => {
  return (
    <div className={styles.topicSection}>
      <h3 className={styles.subTitle}>{subTitle}</h3>
      <h1 className={styles.title}>
        {title.map((text, index) => (
          <>
            <span
              key={index}
              className={text.highlight ? styles.highlight : ""}
            >
              {text.text}
            </span>{" "}
          </>
        ))}
      </h1>
      <img src={line} alt="Line" />
    </div>
  );
};

export default TopicSection;

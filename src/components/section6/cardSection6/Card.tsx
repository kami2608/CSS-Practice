import type { FC } from "react";
import type { Topic } from "../../../types/Topic.type";
import styles from "./Card.module.css";

interface CardProps {
  topic: Topic;
  index: number;
}

const Card: FC<CardProps> = ({ topic, index }) => {
  return (
    <div className={styles.card}>
      <img src={topic.img} alt="Image" />
      <div className={styles.cardText}>
        <h2 className={styles.index}>{`0${index + 1}`}</h2>
        <h3 className={styles.title}>
          {topic.title.map((text, index) => (
            <span key={index}>{text.text}</span>
          ))}
        </h3>
        <p className={styles.description}>{topic.description}</p>
      </div>
    </div>
  );
};

export default Card;

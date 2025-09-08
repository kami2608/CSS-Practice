import type { FC } from "react";
import type { Topic } from "../../../types/Topic.type";
import styles from "./Card.module.css";

interface CardProps {
  topic: Topic;
}

const Card: FC<CardProps> = ({ topic }) => {
  return (
    <div className={styles.card}>
      <img src={topic.img} alt="Image" />
      <p className={styles.text}>{topic.description}</p>
    </div>
  );
};

export default Card;

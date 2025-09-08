import type { FC } from "react";
import type { Topic } from "../../../types/Topic.type";
import styles from "./Card.module.css";
import Button from "../../common/button/Button";

interface CardProps {
  topic: Topic;
}

const Card: FC<CardProps> = ({ topic }) => {
  return (
    <div className={styles.card}>
      <img src={topic.img} alt="Image" />
      <div className={styles.text}>
        <h2 className={styles.title}>
          {topic.title.map((text, index) => (
            <span key={index}>{text.text}</span>
          ))}
        </h2>
        <p className={styles.description}>{topic.description}</p>
        <Button>Xem chi tiết</Button>
      </div>
    </div>
  );
};

export default Card;

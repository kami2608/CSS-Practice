import type { FC, HTMLAttributes } from "react";
import styles from "./HeroContent.module.css";
import Button from "../../common/button/Button";
import TopicHero from "./topic/TopicHero";
import clsx from "clsx";
import type { Topic } from "../../../types/Topic.type";

interface HeroContentProps extends HTMLAttributes<HTMLDivElement> {
  topic: Topic;
}

const HeroContent: FC<HeroContentProps> = ({ topic, ...props }) => {
  return (
    <div {...props} className={clsx(styles.heroContent, props.className)}>
      <div className={styles.text}>
        <TopicHero title={topic.title} description={topic.description} />
        <Button>Tìm hiểu ngay</Button>
      </div>
      <img src={topic.img} alt="Image" />
    </div>
  );
};

export default HeroContent;

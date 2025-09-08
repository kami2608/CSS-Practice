import { useState, type FC } from "react";
import styles from "./Section8.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import SlideButton from "../common/slideBtn/SlideButton";
import { section8Topic } from "../../data/section8Topics";
import Card from "./cardSection8/Card";

const Section8: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[7].subtitle}
        title={sectionTitle[7].title}
      />

      <div
        className={styles.main}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {section8Topic.map((topic, index) => (
          <Card key={index} topic={topic} />
        ))}
      </div>

      <div className={styles.slideBtn}>
        {section8Topic.map((_, index) => (
          <SlideButton
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section8;

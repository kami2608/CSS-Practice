import { useState, type FC } from "react";
import TopicSection from "../section-comon/topic/TopicSection";
import styles from "./Section2.module.css";
import { sectionTitle } from "../../data/sectionTitle";
import { section2Topics } from "../../data/section2Topics";
import Card from "./cardSection2/Card";
import SlideButton from "../common/slideBtn/SlideButton";

const Section2: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[1].subtitle}
        title={sectionTitle[1].title}
      />

      <div
        className={styles.main}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {section2Topics.map((topic, index) => (
          <Card key={index} topic={topic} />
        ))}
      </div>

      <div className={styles.slideBtn}>
        {section2Topics.map((_, index) => (
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

export default Section2;

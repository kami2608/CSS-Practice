import type { FC } from "react";
import styles from "./Section3.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import { section3Topics } from "../../data/section3Topics";
import Card from "./cardSection3/Card";

const Section3: FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[2].subtitle}
        title={sectionTitle[2].title}
      />
      <div className={styles.main}>
        {section3Topics.map((topic, index) => (
            <Card key={index} topic={topic}/>
        ))}
      </div>
    </section>
  );
};

export default Section3;

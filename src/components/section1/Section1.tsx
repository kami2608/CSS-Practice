import type { FC } from "react";
import styles from "./Section1.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import { section1Topics } from "../../data/section1Topics";
import Card from "./cardSection1/Card";

const Section1: FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[0].subtitle}
        title={sectionTitle[0].title}
      />
      <div className={styles.main}>
        {section1Topics.map((topic, index) => (
          <Card key={index} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default Section1;

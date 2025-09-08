import type { FC } from "react";
import styles from "./Section7.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import { section7Topics } from "../../data/section7Topics";
import Card from "./cardSection7/Card";
import img from "../../assets/section7/img.png";

const Section7: FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[6].subtitle}
        title={sectionTitle[6].title}
      />

      <div className={styles.main}>
        <img src={img} alt="Image" />
        <div className={styles.topic}>
        {section7Topics.map((topic, index) => (
          <Card key={index} topic={topic} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;

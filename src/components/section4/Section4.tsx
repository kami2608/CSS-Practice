import type { FC } from "react";
import styles from "./Section4.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import img1 from "../../assets/section4/img1.png";
import img2 from "../../assets/section4/img2.png";

const Section4: FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <TopicSection
        subTitle={sectionTitle[3].subtitle}
        title={sectionTitle[3].title}
      />
      <div className={styles.main}>
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
      </div>
    </section>
  );
};

export default Section4;

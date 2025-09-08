import { useEffect, useState, type FC } from "react";
import styles from "./Section6.module.css";
import { sectionTitle } from "../../data/sectionTitle";
import SlideButton from "../common/slideBtn/SlideButton";
import { section6Topics } from "../../data/section6Topics";
import TopicDarkSection from "../section-comon/topic-dark/TopicDarkSection";
import MainSectionPC from "./main-section6-PC/MainSectionPC";
import MainSectionSP from "./main-section6-SP/MainSectionSP";

const Section6: FC = () => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 1024);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setIsPC(window.innerWidth >= 1024);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.topic}>
        <TopicDarkSection
          subTitle={sectionTitle[5].subtitle}
          title={sectionTitle[5].title}
        />
      </div>

      {isPC ? <MainSectionPC /> : <MainSectionSP activeIndex={activeIndex} />}

      {!isPC && (
        <div className={styles.slideBtn}>
          {section6Topics.map((_, index) => (
            <SlideButton
              key={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section6;

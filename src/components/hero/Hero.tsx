import { useEffect, useState, type FC } from "react";
import styles from "./Hero.module.css";
import LeftRightBtns from "./leftRightBtns/LeftRightBtns";
import HeroContent from "./heroContent/HeroContent";
import { heroTopics } from "../../data/heroTopics";
import SlideButton from "../common/slideBtn/SlideButton";

const Hero: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPC, setIsPC] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    function handleResize() {
      setIsPC(window.innerWidth >= 780);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      console.log("prev");
    }
  };

  const handleNext = () => {
    if (activeIndex < heroTopics.length - 1) {
      setActiveIndex((prev) => prev + 1);
      console.log("next");
    }
  };

  return (
    <section className={styles.hero}>
      {isPC && (
        <div className={styles.leftRightBtns}>
          <LeftRightBtns
            hasPrev={activeIndex > 0}
            hasNext={activeIndex < heroTopics.length - 1}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      )}

      <div
        className={styles.heroContents}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {heroTopics.map((topic, index) => (
          <HeroContent key={index} topic={topic} />
        ))}
      </div>

      <div className={styles.slideBtn}>
        {heroTopics.map((_, index) => (
          <SlideButton
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

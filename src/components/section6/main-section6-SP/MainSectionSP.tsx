import type { FC } from "react";
import styles from "./MainSectionSP.module.css"
import { section6Topics } from "../../../data/section6Topics";
import Card from "../cardSection6/Card";

interface MainSectionSPProps {
    activeIndex: number;
}

const MainSectionSP: FC<MainSectionSPProps> = ({activeIndex}) => {
  return (
    <div
      className={styles.main}
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {section6Topics.map((topic, index) => (
        <Card key={index} topic={topic} index={index} />
      ))}
    </div>
  );
};

export default MainSectionSP;

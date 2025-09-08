import type { FC } from "react";
import styles from "./MainSectionPC.module.css";
import { section6Topics } from "../../../data/section6Topics";
import Card from "../cardSection6/Card";

const MainSectionPC: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        {section6Topics.map((topic, index) =>
          (index + 1) % 2 === 1 ? (
            <Card key={index} topic={topic} index={index} />
          ) : null
        )}
      </div>

      <div className={styles.rightSide}>
        {section6Topics.map((topic, index) =>
          (index + 1) % 2 === 0 ? (
            <Card key={index} topic={topic} index={index} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MainSectionPC;

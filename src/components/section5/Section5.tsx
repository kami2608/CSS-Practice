import { useEffect, useState, type FC } from "react";
import styles from "./Section5.module.css";
import TopicSection from "../section-comon/topic/TopicSection";
import { sectionTitle } from "../../data/sectionTitle";
import { section5Courses } from "../../data/section5Topics";
import Card from "./cardSection5/Card";
import SlideButton from "../common/slideBtn/SlideButton";

const Section5: FC = () => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const courses = section5Courses[activeCourseIndex].topics;
  const [page, setPage] = useState(0);

  const [cardsPerPage, setCardsPerPage] = useState(
    window.innerWidth >= 1024 ? 9 : 3
  );
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setCardsPerPage(9);
      else setCardsPerPage(3);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(courses.length / cardsPerPage);

  return (
    <div className={styles.sectionContainer}>
      <TopicSection
        title={sectionTitle[4].title}
        subTitle={sectionTitle[4].subtitle}
      />

      <div className={styles.navbar}>
        {section5Courses.map((course, index) => (
          <p
            key={index}
            className={
              activeCourseIndex === index ? styles.activeCourse : styles.course
            }
            onClick={() => setActiveCourseIndex(index)}
          >
            {course.title}
          </p>
        ))}
      </div>

      <div
        className={styles.main}
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <div className={styles.page} key={index}>
            {courses
              .slice(index * cardsPerPage, (index + 1) * cardsPerPage)
              .map((card, index) => (
                <Card key={`card${index}`} topic={card} />
              ))}
          </div>
        ))}
      </div>

      <div className={styles.slideBtn}>
        {Array.from({ length: totalPages }, (_, index) => (
          <SlideButton
            key={index}
            isActive={index === page}
            onClick={() => setPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section5;

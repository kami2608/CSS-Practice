import type { Topic } from "../types/Topic.type";
import img1 from "../assets/section2/img1.png";
import img2 from "../assets/section2/img2.png";
import img3 from "../assets/section2/img3.png";

export const section2Topics: Topic[] = [
  {
    title: [{ text: "được học theo năng lực" }],
    description:
      "Mỗi học sinh được học theo năng lực nhận thức, tốc độ học của chính mình",
    img: img1,
  },
  {
    title: [{ text: "tiết kiệm thời gian học" }],
    description:
      "Không mất nhiều thời gian học cái đã biết, được đào sâu và khắc phục cái mình còn đang yếu",
    img: img2,
  },
  {
    title: [{ text: "biết phần tốt & chưa tốt" }],
    description:
      "Luôn biết được cái gì đã tốt và cái gì chưa tốt, cần phải cải thiện kiến thức nào để đạt mục tiêu",
    img: img3,
  },
];

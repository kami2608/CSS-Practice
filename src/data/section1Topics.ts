import type { Topic } from "../types/Topic.type";
import icon1 from "../assets/section1/brainIcon.png";
import icon2 from "../assets/section1/bookIcon.png";
import icon3 from "../assets/section1/house.png";
import icon4 from "../assets/section1/lightIcon.png";

export const section1Topics: Topic[] = [
  {
    title: [{ text: "có lộ trình riêng" }],
    description:
      "Mỗi học sinh có một lộ trình riêng theo đúng năng lực ở mỗi thời điểm",
    img: icon1,
  },
  {
    title: [{ text: "điều phối nội dung học" }],
    description:
      "Nội dung học tập được điều phối tự động đúng với năng lực học sinh, không quá dễ hay quá khó",
    img: icon2,
  },
  {
    title: [{ text: "tập trung vào cái yếu" }],
    description:
      "Tập trung vào cái còn yếu, chưa biết của mỗi bạn dựa trên hiện trạng học tập",
    img: icon3,
  },
  {
    title: [{ text: "thành thạo dễ dàng" }],
    description:
      "Học đến đâu thành thạo đến đó, sai ở đâu được hỗ trợ tức thì ở đó cho đến khi vững vàng vượt qua",
    img: icon4,
  },
];

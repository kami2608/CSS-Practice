import type { Topic } from "../types/Topic.type";
import img1 from "../assets/section3/img1.png";
import img2 from "../assets/section3/img2.png";
import img3 from "../assets/section3/img3.png";
import img4 from "../assets/section3/img4.png";
import bg1 from "../assets/section3/bg-card1.png";
import bg2 from "../assets/section3/bg-card2.png";
import bg3 from "../assets/section3/bg-card3.png";
import bg4 from "../assets/section3/bg-card4.png";

export const section3Topics: Topic[] = [
  {
    title: [{ text: "Micro-Learning" }],
    description:
      "Các nội dung học tập được chia nhỏ để có thể nắm bắt chi tiết học sinh đang còn yếu ở đâu và xuất phát từ kiến thức nào bị hổng",
    img: img1,
    bg: bg1,
  },
  {
    title: [{ text: "Phương pháp 80:20" }],
    description:
      "80% thời gian, nỗ lực được sử dụng cho việc học tập, tự luyện, tự giải quyết vấn đề trong khi 20% được phân bổ cho việc giảng dạy, trang bị kiến thức, hỗ trợ những vấn đề học sinh gặp phải.",
    img: img2,
    bg: bg2,
  },
  {
    title: [{ text: "Mastery Learning" }],
    description:
      "Học sinh sẽ được điều phối để thành thạo từng kiến tức, từng chủ đề và cuối cùng là đạt được toàn bộ các yêu cầu cần đạt đối với mục tiêu bản thân và chương trình học đề ra.",
    img: img3,
    bg: bg3,
  },
  {
    title: [{ text: "Student Centeric" }],
    description:
      "Học sinh được học theo giáo án và trải nghiệm riêng, được theo sát và hỗ trợ kịp thời bất cứ khi nào gặp vấn đề. Học sinh là trung tâm của hoatj động học tập.",
    img: img4,
    bg: bg4,
  },
];

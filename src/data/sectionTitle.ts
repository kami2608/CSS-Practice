import type { Title } from "../types/Title.type";

interface SectionTitle {
  subtitle: string;
  title: Title[];
}

export const sectionTitle: SectionTitle[] = [
  {
    subtitle: "demo sub title here",
    title: [
      { text: "NaviEdu mang đến" },
      { text: "trải nghiệm học tập", highlight: true },
      { text: "theo giáo án riêng phù hợp với năng lực từng học sinh" },
    ],
  },
  {
    subtitle: "demo sub title here",
    title: [
      { text: "lợi ích nổi bật", highlight: true },
      { text: "với học sinh" },
    ],
  },
  {
    subtitle: "demo sub title here",
    title: [
      { text: "bằng các" },
      { text: "phương pháp giáo dục hiện đại", highlight: true },
      { text: "và" },
      { text: "công nghệ AI", highlight: true },
      { text: ", hãy cùng NaviEdu bước vào kỉ nguyên giáo dục thông minh" },
    ],
  },
  {
    subtitle: "Công nghệ AI giúp việc học trở nên thông minh hơn",
    title: [
      { text: "tối ưu công nghệ" },
      { text: "adaptive learning", highlight: true },
      { text: "machine learning - big data - cloud computing" },
    ],
  },
  {
    subtitle: "demo sub title here",
    title: [
      { text: "các" },
      { text: "khóa học", highlight: true },
      { text: "nổi bật" },
    ],
  },
  {
    subtitle: "chúng tôi cam kết",
    title: [
      { text: "giúp học sinh" },
      { text: "tiến bộ hơn", highlight: true },
      { text: "so với chính mình mỗi ngày" },
    ],
  },
  {
    subtitle: "chúng tôi tự hào mang tới",
    title: [
      { text: "công nghệ học tập" },
      { text: "đột phá", highlight: true },
      { text: "cho học sinh việt nam" },
    ],
  },
  {
    subtitle: "cố vấn chuyên môn",
    title: [{ text: "chuyên gia", highlight: true }, { text: "giáo dục" }],
  },
];

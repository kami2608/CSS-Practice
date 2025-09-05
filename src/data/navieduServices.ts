export interface Service {
  topic: string;
  features: { title: string; href: string }[];
}

export const navieduServices: Service[] = [
  {
    topic: "về naviedu",
    features: [
      { title: "Giới thiệu", href: "/introduction" },
      { title: "Chính sách bảo mật", href: "/privacy-policy" },
      { title: "Chính sách thanh toán", href: "/payment-policy" },
      { title: "Cam kết - hoàn tiền", href: "/refund" },
      { title: "Điều khoản sử dụng", href: "/terms-of-use" },
    ],
  },
  {
    topic: "hỗ trợ",
    features: [
      { title: "Tư vấn hỗ trợ", href: "/support" },
      { title: "Hướng dẫn sử dụng", href: "/user-guide" },
      { title: "Kích hoạt khóa học", href: "/course-activation" },
      { title: "Quy định khóa học", href: "/course-rules" },
      { title: "Câu hỏi thường gặp", href: "/faq" },
    ],
  },
];

import fb from "../assets/media/fb.png";
import ins from "../assets/media/insta.png";
import x from "../assets/media/x.png";
import gg from "../assets/media/google.png";
import linkedin from "../assets/media/linkedIn.png";

interface Media {
  icon: string;
  href: string;
  alt: string;
}

export const mediaOptions: Media[] = [
  { icon: fb, href: "https://www.facebook.com/", alt: "Facebook" },
  { icon: ins, href: "https://www.instagram.com/", alt: "Instagram" },
  { icon: x, href: "https://www.x.com/", alt: "X" },
  { icon: gg, href: "https://www.google.com/", alt: "Google" },
  { icon: linkedin, href: "https://www.linkedin.com/", alt: "Linked In" },
];

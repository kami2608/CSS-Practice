import type { Title } from "./Title.type";

export interface Topic {
  title: Title[];
  description: string;
  img: string;
  bg?: string;
}

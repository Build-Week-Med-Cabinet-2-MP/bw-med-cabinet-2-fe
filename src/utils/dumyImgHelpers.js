import { img } from "../data";

export const randPic = () => {
  return img[Math.floor(Math.random() * 2)];
};

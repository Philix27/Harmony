import { MdGroup } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { ILinkItem } from "./linkItem";
import { Home } from "views/home";
import { CanvasFrame } from "views";

export const GroupItemList: Array<ILinkItem> = [
  {
    title: "Doow",
    icon: <RiAccountCircleFill />,
    comp: <Home />,
  },
  {
    title: "Hexelan",
    icon: <MdGroup color="red" />,
    comp: <Home />,
  },
  {
    title: "Turing",
    icon: <MdGroup color="yellow" />,
    comp: <CanvasFrame />,
  },
];

import { MdGroup } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import CanvasFrame from "views/canvas/canvas";
import Home from "views/home/home";
import { ILinkItem } from "./linkItem";

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

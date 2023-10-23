import Link from "next/link";
import styles from "./sidebar.module.scss";
import Home from "views/home/home";
import { useAppSelector } from "hooks";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import CanvasFrame from "views/canvas/canvas";

export interface ILinkItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}

export function LinkItem(data: ILinkItem) {
  const selector = useAppSelector((s) => s.tabs);

  return (
    <Link key={data.id} className={styles.link} href="#">
      <li
        className={
          selector.name === data.title
            ? styles.activeItem
            : styles.sidebar_start_list_item
        }
      >
        {data.icon}
      </li>
    </Link>
  );
}

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

export function get_active_tab(params: string): JSX.Element {
  const v = GroupItemList.filter((v) => v.title === params)[0]?.comp || (
    <Home />
  );
  return v;
}

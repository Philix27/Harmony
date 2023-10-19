import Link from "next/link";
import styles from "./sidebar.module.scss";
import Home from "views/home/home";
import { useAppDispatch, useAppSelector } from "hooks";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import CanvasFrame from "views/canvas/canvas";
import GoalsView from "views/goals/goals";
import SettingsView from "views/settings/settings";
import WebFrame, { WebFrame2 } from "views/web/web";
import { TabsType } from "comps/navbar/types";

export interface ILinkItem {
  id?: number;
  title: TabsType;
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

export const ListOfLinkItems: Array<ILinkItem> = [
  {
    title: "HOME",
    icon: <RiAccountCircleFill />,
    comp: <Home />,
  },
  {
    title: "CHAT",
    icon: <MdGroup color="red" />,
    comp: <Home />,
  },
  {
    title: "FINANCE",
    icon: <MdGroup color="green" />,
    comp: <GoalsView />,
  },
  {
    title: "NOTES",
    icon: <MdGroup color="yellow" />,
    comp: <CanvasFrame />,
  },
  {
    title: "TASKS",
    icon: <MdGroup color="pink" />,
    comp: <SettingsView />,
  },
  {
    title: "HOME",
    icon: <MdGroup color="skyblue" />,
    comp: <WebFrame />,
  },
  {
    title: "HOME",
    icon: <MdGroup color="violet" />,
    comp: <WebFrame2 />,
  },
];

export function get_active_tab(params: string): JSX.Element {
  const v = ListOfLinkItems.filter((v) => v.title === params)[0]?.comp || (
    <Home />
  );
  return v;
}

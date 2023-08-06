import Link from "next/link";
import styles from "./sidebar.module.scss";
import { HiHome } from "react-icons/hi";
import { BsClipboard } from "react-icons/bs";
import {
  MdDraw,
  MdNotes,
  MdSettings,
  MdShoppingBasket,
  MdWeb,
} from "react-icons/md";
import { selectTab } from "../../redux/store";
import { changeTab } from "../../redux/slice/tab";
import Home from "../../views/home/home";
import TasksSection from "../../views/tasks/task";
import GoalsView from "../../views/goals/goals";
import SettingsView from "../../views/settings/settings";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import WebFrame, { WebFrame2 } from "../../views/web/web";
import CanvasFrame from "../../views/canvas/canvas";
import { AiFillAccountBook } from "react-icons/ai";

export interface ILinkItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}

export function LinkItem(data: ILinkItem) {
  const activeTab = useAppSelector(selectTab);
  const dispatch = useAppDispatch();

  return (
    <Link
      key={data.id}
      className={styles.link}
      href="#"
      onClick={() => {
        dispatch(changeTab({ name: data.title }));
      }}
    >
      <li
        className={
          activeTab.name === data.title
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
    icon: <HiHome />,
    comp: <Home />,
    // comp: <div>Hello boys</div>,
  },

  {
    title: "HARMONY",
    icon: <BsClipboard />,
    comp: <TasksSection />,
  },
  {
    title: "MARKET",
    icon: <MdShoppingBasket />,
    comp: <GoalsView />,
  },
  {
    title: "CANVAS",
    icon: <MdDraw />,
    comp: <CanvasFrame />,
  },
  {
    title: "SETTINGS",
    icon: <MdSettings />,
    comp: <SettingsView />,
  },
  {
    title: "WEB",
    icon: <MdWeb />,
    comp: <WebFrame />,
  },
  {
    title: "WEB2",
    icon: <AiFillAccountBook />,
    comp: <WebFrame2 />,
  },
];

export function get_active_tab(params: string): JSX.Element {
  return ListOfLinkItems.filter((v) => v.title === params)[0].comp;
}

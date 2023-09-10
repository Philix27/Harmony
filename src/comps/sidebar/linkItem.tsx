import Link from "next/link";
import styles from "./sidebar.module.scss";
import { HiHome } from "react-icons/hi";
import { BsClipboard } from "react-icons/bs";
import { MdDraw, MdSettings, MdShoppingBasket, MdWeb } from "react-icons/md";
import Home from "views/home/home";
import TasksSection from "views/tasks/task";
import GoalsView from "views/goals/goals";
import SettingsView from "views/settings/settings";
import { useAppDispatch, useAppSelector } from "hooks";
import WebFrame, { WebFrame2 } from "views/web/web";
import CanvasFrame from "views/canvas/canvas";
import { AiFillAccountBook } from "react-icons/ai";
import { TabsType } from "comps/navbar/types";

export interface ILinkItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}

export function LinkItem(data: ILinkItem) {
  const selector = useAppSelector((state) => state.tabs);
  const { dispatch, actions } = useAppDispatch();

  return (
    <Link
      key={data.id}
      className={styles.link}
      href="#"
      onClick={() => {
        dispatch(actions.tab.change_tab({ name: selector.name, org_name: "" }));
      }}
    >
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
    icon: <HiHome />,
    comp: <Home />,
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

export function get_active_tab(params: TabsType): JSX.Element {
  const v = ListOfLinkItems.filter((v) => v.title === params)[0]?.comp;
  return v || <Home />;
}

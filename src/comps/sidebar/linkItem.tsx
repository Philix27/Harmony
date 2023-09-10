import Link from "next/link";
import styles from "./sidebar.module.scss";
import { HiHome } from "react-icons/hi";
import { BsClipboard } from "react-icons/bs";
import { MdDraw, MdSettings, MdShoppingBasket } from "react-icons/md";
import Home from "views/home/home";
import TasksSection from "views/tasks/task";
import GoalsView from "views/goals/goals";
import SettingsView from "views/settings/settings";
import { useAppDispatch, useAppSelector } from "hooks";
import CanvasFrame from "views/canvas/canvas";
import { TabsType } from "comps/navbar/types";
import ChatApp from "views/chat";

export interface ILinkItem {
  id?: number;
  title: TabsType;
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
    title: "CHAT",
    icon: <BsClipboard />,
    comp: <ChatApp />,
  },
  {
    title: "FINANCE",
    icon: <MdShoppingBasket />,
    comp: <GoalsView />,
  },
  {
    title: "NOTES",
    icon: <MdDraw />,
    comp: <CanvasFrame />,
  },
  {
    title: "TASKS",
    icon: <MdSettings />,
    comp: <SettingsView />,
  },
];

export function get_active_tab(params: TabsType): JSX.Element {
  const v = ListOfLinkItems.filter((v) => v.title === params)[0]?.comp;
  return v || <Home />;
}

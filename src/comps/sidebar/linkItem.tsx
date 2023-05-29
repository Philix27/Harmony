import Link from "next/link";
import styles from "./sidebar.module.scss";
import { HiHome } from "react-icons/hi";
import { BsClipboard } from "react-icons/bs";
import { MdNotes, MdSettings, MdShoppingBasket, MdWeb } from "react-icons/md";
import { selectTab } from "../../utils/redux/store";
import { changeTab } from "../../utils/redux/tabs/tab_slice";
import Home from "../../views/home/home";
import ChatSection from "../../views/chat/chat";
import TasksSection from "../../views/tasks/task";
import GoalsView from "../../views/goals/goals";
import SettingsView from "../../views/settings/settings";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import WebFrame from "../../views/web/web";

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
    title: "DOOW",
    icon: <MdNotes />,
    comp: <ChatSection />,
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
    title: "SETTINGS",
    icon: <MdSettings />,
    comp: <SettingsView />,
  },
  {
    title: "WEB",
    icon: <MdWeb />,
    comp: <WebFrame />,
  },
];

export function get_active_tab(params: string): JSX.Element {
  return ListOfLinkItems.filter((v) => v.title === params)[0].comp;
}

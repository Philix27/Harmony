import Link from "next/link";
import styles from "./sidebar.module.scss";
import { changeTab } from "redux/slice/tab";
import Home from "../../views/home/home";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { TabSettingsReduxType } from "redux/store";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdGroup } from "react-icons/md";
import CanvasFrame from "../../views/canvas/canvas";
import GoalsView from "../../views/goals/goals";
import SettingsView from "../../views/settings/settings";
import WebFrame, { WebFrame2 } from "../../views/web/web";

export interface ILinkItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}

export function LinkItem(data: ILinkItem) {
  const activeTab = useAppSelector(TabSettingsReduxType);
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
    icon: <RiAccountCircleFill />,
    comp: <Home />,
  },
  {
    title: "ORG_1",
    icon: <MdGroup color="red" />,
    comp: <Home />,
  },
  {
    title: "ORG_2",
    icon: <MdGroup color="green" />,
    comp: <GoalsView />,
  },
  {
    title: "ORG_3",
    icon: <MdGroup color="yellow" />,
    comp: <CanvasFrame />,
  },
  {
    title: "ORG_4",
    icon: <MdGroup color="pink" />,
    comp: <SettingsView />,
  },
  {
    title: "ORG_5",
    icon: <MdGroup color="skyblue" />,
    comp: <WebFrame />,
  },
  {
    title: "ORG_6",
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

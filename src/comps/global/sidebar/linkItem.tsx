import Link from "next/link";
import styles from "./sidebar.module.scss";
import Home from "views/home/home";
import { useAppSelector } from "hooks";
import { GroupItemList } from "./data";

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

export function get_active_tab(params: string): JSX.Element {
  const v = GroupItemList.filter((v) => v.title === params)[0]?.comp || (
    <Home />
  );
  return v;
}

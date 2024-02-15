import Link from "next/link";
import { useAppSelector } from "hooks";
import { GroupItemList } from "./data";
import { Home } from "views";

export interface ILinkItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}

export function LinkItem(data: ILinkItem) {
  const selector = useAppSelector((s) => s.tabs);

  return (
    <Link key={data.id} className={"link"} href="#">
      <li
        className={
          selector.name === data.title
            ? "activeItem"
            : "sidebar_start_list_item"
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

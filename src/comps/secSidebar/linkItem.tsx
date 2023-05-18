import Link from "next/link";
import { MdAdminPanelSettings } from "react-icons/md";
import styles from "./sidebar.module.scss";

export function LinkItem(
  title: string,
  setActiveIndex: (n: number) => void,
  currentActiveIndex: number,
  linkIndex: number,
  icon: JSX.Element
) {
  return (
    <Link
      className={styles.link}
      href="#"
      onClick={() => setActiveIndex(linkIndex)}
    >
      <li
        className={
          currentActiveIndex == linkIndex
            ? styles.activeItem
            : styles.sidebar_start_list_item
        }
      >
        {icon}
        <p>{title}</p>
      </li>
    </Link>
  );
}

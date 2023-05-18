import Link from "next/link";
import { MdAdminPanelSettings } from "react-icons/md";
import styles from "./sidebar.module.scss";

export function LinkItem(
  title: string,
  setIsOrg: any,
  isActive: boolean,
  userState: ActiveUser
) {
  return (
    <Link className={styles.link} href="#" onClick={() => setIsOrg(userState)}>
      <li
        className={
          isActive ? styles.activeItem : styles.sidebar_start_list_item
        }
      >
        <MdAdminPanelSettings />
        <p>{title}</p>
      </li>
    </Link>
  );
}

export enum ActiveUser {
  ORG,
  ME,
  KOLAB,
}

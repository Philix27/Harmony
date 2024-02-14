import styles from "./sidebar.module.scss";
import { LinkItem } from "./linkItem";
import { GroupItemList } from "./data";

export function SidebarAccounts() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          {GroupItemList.map((v, i) =>
            LinkItem({
              id: i,
              title: v.title,
              icon: v.icon,
              comp: v.comp,
            })
          )}
        </ul>
        <div className={styles.bottom_sidebar_start_list}></div>
      </div>
    </div>
  );
}

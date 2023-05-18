import styles from "./sidebar.module.scss";
import { ActiveUser, LinkItem } from "./linkItem";

export default function Sidebar(
  isOrg,
  setIsOrg: React.Dispatch<React.SetStateAction<ActiveUser>>
) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          {LinkItem("ME", setIsOrg, isOrg === ActiveUser.ME, ActiveUser.ME)}
          {LinkItem("DOOW", setIsOrg, isOrg === ActiveUser.ORG, ActiveUser.ORG)}
          {LinkItem(
            "KOLAB",
            setIsOrg,
            isOrg === ActiveUser.KOLAB,
            ActiveUser.KOLAB
          )}
        </ul>
      </div>
    </div>
  );
}

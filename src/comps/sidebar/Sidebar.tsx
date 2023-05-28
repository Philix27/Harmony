import styles from "./sidebar.module.scss";
import {  LinkItem, ListOfLinkItems } from "./linkItem";


export default function Sidebar(
  isOrg,
  // setIsOrg: React.Dispatch<React.SetStateAction<ActiveUser>>,
) {

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          {
          ListOfLinkItems.map((v, i) => LinkItem(
        {
          id: i,
         title: v.title,
         icon: v.icon,
         comp: v.comp
        }
         ))
            
            }
         
        </ul>
        <div className={styles.bottom_sidebar_start_list}>
        </div>
      </div>
    </div>
  );
}

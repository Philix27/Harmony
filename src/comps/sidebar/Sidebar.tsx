import styles from "./sidebar.module.scss";
import { ActiveUser, LinkItem } from "./linkItem";
import {  MdNightlife, MdNotes, MdSettings } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { BsClipboard } from "react-icons/bs";

export default function Sidebar(
  isOrg,
  setIsOrg: React.Dispatch<React.SetStateAction<ActiveUser>>,
) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          {LinkItem(
            "ME", 
            setIsOrg, 
            isOrg === ActiveUser.ME, 
            ActiveUser.ME, 
            <HiHome /> )}
          {LinkItem(
            "DOOW", 
            setIsOrg, 
            isOrg === ActiveUser.ORG, 
            ActiveUser.ORG, 
            <MdNotes />)}
          {LinkItem(
            "KOLAB",
            setIsOrg,
            isOrg === ActiveUser.KOLAB,
            ActiveUser.KOLAB,
            <BsClipboard />
          )}
          {LinkItem(
            "KOLAB",
            setIsOrg,
            isOrg === ActiveUser.KOLAB,
            ActiveUser.KOLAB,
            <MdNightlife />
          )}
          {LinkItem(
            "KOLAB",
            setIsOrg,
            isOrg === ActiveUser.KOLAB,
            ActiveUser.KOLAB,
            <MdSettings />
          )}
        </ul>
        <div className={styles.bottom_sidebar_start_list}>

        </div>
      </div>
    </div>
  );
}

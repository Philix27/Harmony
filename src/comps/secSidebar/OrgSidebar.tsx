import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import {
  MdAnnouncement,
  MdNotificationImportant,
  MdSettings,
} from "react-icons/md";
import styles from "./sidebar.module.scss";
import { LinkItem } from "./linkItem";
import { FaChessBoard } from "react-icons/fa";

export default function OrgSidebar({ activeIndex, setActiveIndex }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_start}>
        <ul className={styles.sidebar_start_list}>
          {LinkItem("CHAT", setActiveIndex, activeIndex, 1, <RiHome5Fill />)}
          {LinkItem("CHAT AI", setActiveIndex, activeIndex, 1, <RiHome5Fill />)}
          {LinkItem("TASKS", setActiveIndex, activeIndex, 1, <RiHome5Fill />)}
          {LinkItem(
            "WHITEBOARD",
            setActiveIndex,
            activeIndex,
            1,
            <FaChessBoard />
          )}
          {LinkItem(
            "ANNOUNCEMENT",
            setActiveIndex,
            activeIndex,
            1,
            <MdAnnouncement />
          )}
          {LinkItem("WIKI", setActiveIndex, activeIndex, 1, <RiHome5Fill />)}
          {LinkItem(
            "NOTIFICATIONS",
            setActiveIndex,
            activeIndex,
            1,
            <MdNotificationImportant />
          )}
          {LinkItem("NOTES", setActiveIndex, activeIndex, 1, <RiHome5Fill />)}
          {LinkItem("MEETINGS", setActiveIndex, activeIndex, 1, <MdSettings />)}
          {LinkItem(
            "SCHEDULER",
            setActiveIndex,
            activeIndex,
            1,
            <RiHome5Fill />
          )}
          {LinkItem(
            "SETTINGS",
            setActiveIndex,
            activeIndex,
            1,
            <RiHome5Fill />
          )}
        </ul>
      </div>
    </div>
  );
}

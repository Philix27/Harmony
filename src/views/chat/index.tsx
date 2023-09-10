import React from "react";
import styles from "./styles.module.scss";
import { BsChat, BsChatFill } from "react-icons/bs";
import { MdAccountCircle, MdCall, MdFavorite, MdGroups, MdSettings } from "react-icons/md";
import { RiAccountPinCircleFill, RiBookMarkLine } from "react-icons/ri";

export default function ChatApp() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <RiAccountPinCircleFill />
          <MdGroups />
          <MdSettings />
          <MdFavorite />
          <MdCall />
        </div>
        <div className={styles.contents}>
          <ul>
            <li>Jake</li>
            <li>Soloe</li>
          </ul>
        </div>
      </div>
      <div className={styles.main}></div>
      <div className={styles.info}></div>
    </div>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import { MdCall, MdFavorite, MdGroups, MdSettings } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "hooks";
import { FaHome } from "react-icons/fa";

export default function TopBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <div className={styles.top}>
      <div
        className={`${styles.icon} ${
          selector.active_tab === "HOME" ? styles.active : ""
        }`}
      >
        <FaHome onClick={() => dispatch(actions.chat.change_tab("HOME"))} />
      </div>
      <div
        className={`${styles.icon} ${
          selector.active_tab === "CHAT" ? styles.active : ""
        }`}
      >
        <MdGroups onClick={() => dispatch(actions.chat.change_tab("CHAT"))} />
      </div>
      <div
        className={`${styles.icon} ${
          selector.active_tab === "SETTINGS" ? styles.active : ""
        }`}
      >
        <MdSettings
          onClick={() => dispatch(actions.chat.change_tab("SETTINGS"))}
        />
      </div>
      <div
        className={`${styles.icon} ${
          selector.active_tab === "FAVORITE" ? styles.active : ""
        }`}
      >
        <MdFavorite
          onClick={() => dispatch(actions.chat.change_tab("FAVORITE"))}
        />
      </div>
      <div
        className={`${styles.icon} ${
          selector.active_tab === "CALLS" ? styles.active : ""
        }`}
      >
        <MdCall onClick={() => dispatch(actions.chat.change_tab("CALLS"))} />
      </div>
    </div>
  );
}

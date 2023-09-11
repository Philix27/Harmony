import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import SideBar from "./sidebar";

export default function ChatApp() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.main}></div>
      {!selector.is_info_bar_open && <div className={styles.info}></div>}
    </div>
  );
}

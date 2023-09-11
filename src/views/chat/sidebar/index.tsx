import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import TopBar from "./topBar";

export default function SideBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.contents}>
        <ul>
          <li>Jake</li>
          <li>Soloe</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import SideBar from "./sidebar";
import MainContent from "./main";

export default function ChatApp() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();

  return (
    <div className={styles.container}>
      <SideBar />
      <MainContent />
    </div>
  );
}

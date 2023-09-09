import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { TopTabActions } from "redux/slice/top_tab";
import { TopTabReduxType } from "redux/store";
// import { TopTabReduxType } from "redux/store";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { TopTabActions } from "redux/slice/top_tab";

export default function NavBar() {
  const app_store = useAppSelector(TopTabReduxType);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.navbar}>
      <label className={styles.brand}>
        <Link href="/" className={styles.brand}>
          KOLAB
        </Link>
      </label>
      <div className={styles.tabs_container}>
        <div className={styles.tab_box}>
          <div
            className={`${styles.tab_name} ${
              app_store.name === "CHAT" ? styles.active : ""
            }`}
            onClick={() => {
              console.log(app_store.name);
              dispatch(
                TopTabActions.changeTab({
                  name: "CHAT",
                  org_name: "ORG_1",
                })
              );
            }}
          >
            Chat
          </div>
          <div
            className={`${styles.tab_name} ${
              app_store.name === "TASK" ? styles.active : ""
            }`}
            onClick={() => {
              console.log(app_store.name);
              dispatch(
                TopTabActions.changeTab({
                  name: "TASK",
                  org_name: "ORG_1",
                })
              );
            }}
          >
            Task
          </div>
          <div
            className={`${styles.tab_name} ${
              app_store.name === "NOTE" ? styles.active : ""
            }`}
            onClick={() => {
              console.log(app_store.name);
              dispatch(
                TopTabActions.changeTab({
                  name: "NOTE",
                  org_name: "ORG_1",
                })
              );
            }}
          >
            Notes
          </div>
          <div
            className={`${styles.tab_name} ${
              app_store.name === "FINANCE" ? styles.active : ""
            }`}
            onClick={() => {
              console.log(app_store.name);
              dispatch(
                TopTabActions.changeTab({
                  name: "FINANCE",
                  org_name: "ORG_1",
                })
              );
            }}
          >
            Finance
          </div>
        </div>
      </div>
    </div>
  );
}

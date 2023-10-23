import React from "react";
import NavBar from "comps/top_tab";
import styles from "styles/home.module.scss";
import { useAppSelector } from "hooks";
// import { get_active_tab } from "comps/top_tab/linkItem";
import SidebarAccounts from "comps/sidebar/Sidebar";
import { get_active_tab } from "comps/top_tab/array";

export default function Index() {
  const activeTab = useAppSelector((s) => s.tabs);
  return (
    <div className={styles.container}>
      <NavBar />
      <SidebarAccounts />
      {get_active_tab(activeTab.name)}
      {/* <Sidebar /> */}
    </div>
  );
}

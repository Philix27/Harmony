import React from "react";
import NavBar from "comps/navbar";
import styles from "styles/home.module.scss";
import { useAppSelector } from "hooks";
import { get_active_tab } from "comps/sidebar/linkItem";
import SidebarAccounts from "comps/sidebar_acc/Sidebar";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
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

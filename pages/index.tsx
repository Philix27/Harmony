import React from "react";
import NavBar from "../src/comps/navbar/navbar.comp";
import styles from "../src/styles/home.module.scss";
import { useAppSelector } from "../src/redux/hooks";
import { get_active_tab } from "../src/comps/sidebar/linkItem";
import { TabSettingsReduxType } from "../src/redux/store";
import Sidebar from "../src/comps/sidebar/Sidebar";
import SidebarAccounts from "../src/comps/sidebar_acc/Sidebar";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const activeTab = useAppSelector(TabSettingsReduxType);
  return (
    <div className={styles.container}>
      <NavBar />
      <SidebarAccounts />
      {get_active_tab(activeTab.name)}
      {/* <Sidebar /> */}
    </div>
  );
}

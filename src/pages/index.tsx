import React, { useState } from "react";
import Sidebar from "../comps/sidebar/Sidebar";
import NavBar from "../comps/navbar/navbar.comp";
import styles from "../styles/home.module.scss";
import { get_active_tab } from "../comps/sidebar/linkItem";
import { useAppSelector } from "../utils/redux/hooks";
import { selectTab } from "../utils/redux/store";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const activeTab = useAppSelector(selectTab);
  return (
    <div className={styles.container}>
      <NavBar />
      <Sidebar />
      {get_active_tab(activeTab.name)}
    </div>
  );
}

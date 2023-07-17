import React, { useState } from "react";
import Sidebar from "../comps/sidebar/Sidebar";
import NavBar from "../comps/navbar/navbar.comp";
import styles from "../styles/home.module.scss";
import { useAppSelector } from "../redux/hooks";
import { selectTab } from "../redux/store";
import { get_active_tab } from "../comps/sidebar/linkItem";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const activeTab: any = useAppSelector(selectTab);
  return (
    <div className={styles.container}>
      <NavBar />
      {get_active_tab(activeTab.name)}
      <Sidebar />
    </div>
  );
}

import React, { useState } from "react";
import Sidebar from "../src/comps/sidebar/Sidebar";
import NavBar from "../src/comps/navbar/navbar.comp";
import styles from "../src/styles/home.module.scss";
import { useAppSelector } from "../src/redux/hooks";
// import { selectTab } from "../redux/store";
import { get_active_tab } from "../src/comps/sidebar/linkItem";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  // const activeTab: any = useAppSelector(selectTab);
  return (
    <div className={styles.container}>
      <NavBar />
      {/* {get_active_tab(activeTab.name)} */}
      {get_active_tab("HOME")}
      <Sidebar />
    </div>
  );
}

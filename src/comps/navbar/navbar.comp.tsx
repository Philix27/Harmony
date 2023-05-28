import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { ACTIVE_TAB } from "../../utils/redux/tabs/state";
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../../utils/redux/tabs/tab_slice";
import { current } from "@reduxjs/toolkit";

export default function NavBar() {
  const dispatch = useDispatch();
  // changeTab(ACTIVE_TAB.HOME);
  // const currentTab = useSelector((state: ACTIVE_TAB) => state.tabs.activeTab);

  // console.log(currentTab, "currentTab");
  //  const count = useSelector((state) => state.counter.count);

  const show = "show";
  // const [showNav, setShowNav] = useState(ACTIVE_TAB.HOME);

  return (
    <>
      <div className={styles.navbar}>
        <label className={styles.brand}>
          <Link href="/" className={styles.brand}>
            KOLAB
          </Link>
        </label>
        <div className={styles.tabs_container}>
          <div className={styles.tab_box}>
            <div className={`${styles.tab_name} ${styles.active}`}>Home</div>
            <div className={styles.tab_name}>Chat</div>
            <div className={styles.tab_name}>Task</div>
            <div className={styles.tab_name}>Finance</div>
          </div>
        </div>
      </div>
    </>
  );
}

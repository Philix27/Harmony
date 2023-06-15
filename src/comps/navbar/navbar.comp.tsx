import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
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
  );
}

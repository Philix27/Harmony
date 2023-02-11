import React from "react";
import Link from "next/link";
import styles from "./projects.module.scss";

export default function ProjectsSection({ activeIndex, setActiveIndex }) {
  return (
    <div className={activeIndex == 3 ? styles.container : "none"}>
      <h2>Projects</h2>
      <div className={styles.contents}>
        <div className={styles.card}>
          <h3>APCEIMS</h3>
        </div>
        <div className={styles.card}>
          <h3>DOOW</h3>
        </div>
        <div className={styles.card}>
          <h3>APCAIMS</h3>
        </div>
        <div className={styles.card}>
          <h3>SITUATION ROOM</h3>
        </div>
        <div className={styles.card}>
          <h3>WRITABLY</h3>
        </div>
      </div>
    </div>
  );
}

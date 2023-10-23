import React from "react";
import styles from "./tasks.module.scss";

export default function TasksSection() {
  return (
    <>
      <div className={styles.tasks}>
        <h2>All Tasks</h2>
        <div className={styles.tableSection}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Project</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Assignee</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

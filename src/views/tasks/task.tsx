import React from "react";
import products from "../../../data/products.json";
import { AiFillDelete } from "react-icons/ai";
import styles from "./tasks.module.scss";

export default function TasksSection({ activeIndex }) {
  const onDelete = (agent) => {};
  return (
    <div className={activeIndex == 8 ? styles.tasks : "none"}>
      <div className={styles.products}>
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
            <tbody>
              {products.map((agent, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>APCEIMS</td>
                  <td>In progress</td>
                  <td>50%</td>
                  <td>High</td>
                  <td>21st July, 2022</td>
                  <td>Solomon</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

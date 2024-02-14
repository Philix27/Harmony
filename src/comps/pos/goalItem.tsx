import React from "react";
import { IconType } from "react-icons";
import { FaCircle } from "react-icons/fa";
import styles from "./goalItem.module.scss";

interface Props {
  title: string;
  createdBy: string;
  dateCreated: string;
  workRate: string;
  icon: IconType;
}

export function GoalItem(props: Props) {
  return (
    <div className={styles.goal} data-theme="dark">
      <div className={styles.title}>
        <p>Goals</p>
        <props.icon />
      </div>
      <div className={styles.info}>
        <p>Created by {props.createdBy}</p>
        <p>{props.workRate}</p>
        <p>{props.dateCreated}</p>
      </div>
    </div>
  );
}

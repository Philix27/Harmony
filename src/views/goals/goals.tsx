import React from "react";
import { IconBaseProps } from "react-icons";
import { FaCircle, FaCriticalRole, FaUserCircle } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import GoalItem from "../../comps/goalItem/goalItem";
import styles from "./goals.module.scss";
import { styled } from "styled-components";
import {
  BsCircleHalf,
  BsDashCircleDotted,
  BsSlashCircle,
} from "react-icons/bs";

export default function GoalsView() {
  return (
    <div className={styles.container} data-theme="dark">
      <div className={styles.section}>
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={BsCircleHalf}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={BsCircleHalf}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
      </div>
      <div className={styles.section}>
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
      </div>
      <div className={styles.section}>
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaCircle}
        />
        <GoalItem
          title="Goals"
          createdBy={"Jollie"}
          dateCreated="25 Feb, 2023"
          workRate="2/5"
          icon={FaUserCircle}
        />
      </div>
    </div>
  );
}

import React from "react";
import { FaCircle, FaUserCircle } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { GoalItem } from "app/comps";
import { GoalStyles } from "./styles";

export default function GoalsView() {
  return (
    <GoalStyles>
      <div className={"section"}>
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
      <div className={"section"}>
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
      <div className={"section"}>
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
    </GoalStyles>
  );
}

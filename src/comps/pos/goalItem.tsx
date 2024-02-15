import React from "react";
import { IconType } from "react-icons";
import { FaCircle } from "react-icons/fa";
import { CartWrapper } from "./styles";

interface Props {
  title: string;
  createdBy: string;
  dateCreated: string;
  workRate: string;
  icon: IconType;
}

export function GoalItem(props: Props) {
  return (
    <CartWrapper>
      <div className={"title"}>
        <p>Goals</p>
        <props.icon />
      </div>
      <div className={"info"}>
        <p>Created by {props.createdBy}</p>
        <p>{props.workRate}</p>
        <p>{props.dateCreated}</p>
      </div>
    </CartWrapper>
  );
}

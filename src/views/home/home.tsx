import React from "react";
import styles from "./home.module.scss";
import { Md30FpsSelect, MdExtension, MdGroup, MdNotes } from "react-icons/md";
import { FaExternalLinkAlt, FaTasks } from "react-icons/fa";
import { title } from "process";
import { BsChat, BsChatFill, BsClipboard } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.inner_container}>
        <h3>Apps</h3>
        <input type="text" placeholder="Search for an app" />
        <div className={styles.icon_tray}>
          {iconItem("Chat", <BsChatFill />)}
          {iconItem("Group", <MdGroup />)}
          {iconItem("Notification", <MdExtension />)}
          {iconItem("Epics", <FaTasks />)}
          {iconItem("Whiteboard", <BsClipboard />)}
          {iconItem("Photos", <MdExtension />)}
          {iconItem("Wiki", <MdNotes />)}
        </div>
      </div>
    </div>
  );
}

function iconItem(title: string, icon: JSX.Element) {
  return (
    <div>
      {icon}
      <p>{title}</p>
    </div>
  );
}

import React from "react";
import styles from "./home.module.scss";
import { MdExtension, MdGroup, MdNotes } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsChatFill, BsClipboard } from "react-icons/bs";
import { invoke } from "@tauri-apps/api";

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
    <div
      onClick={async () => {
        await invoke("hello_world").then((res) => {
          res as string;
          console.log(res, "from tauri");
        });
        console.log("Yeah man");
      }}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
}

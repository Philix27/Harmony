import React from "react";
import Sidebar from "../comps/sidebar/Sidebar";
import Home from "../views/home/home";
import TasksSection from "../views/tasks/task";
import ProjectsSection from "../views/projects/projects";
import ChatSection from "../views/chat/chat";
import NavBar from "../comps/navbar/navbar.comp";
import GoalsView from "../views/goals/goals";
import SettingsView from "../views/settings/settings";
import styles from "../styles/home.module.scss";

export default function Index({ activeIndex, setActiveIndex }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <Sidebar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <Home activeIndex={activeIndex} />
      <ChatSection activeIndex={activeIndex} />
      <ProjectsSection
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TasksSection activeIndex={activeIndex} />
      <GoalsView activeIndex={activeIndex} />
      <SettingsView activeIndex={activeIndex} />
    </div>
  );
}

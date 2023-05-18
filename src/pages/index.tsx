import React, { useState } from "react";
import Sidebar from "../comps/sidebar/Sidebar";
import Home from "../views/home/home";
import TasksSection from "../views/tasks/task";
import ProjectsSection from "../views/projects/projects";
import ChatSection from "../views/chat/chat";
import NavBar from "../comps/navbar/navbar.comp";
import GoalsView from "../views/goals/goals";
import SettingsView from "../views/settings/settings";
import styles from "../styles/home.module.scss";
import OrgSidebar from "../comps/secSidebar/OrgSidebar";
import SecSidebar from "../comps/secSidebar/SecSidebar";
import { ActiveUser } from "../comps/sidebar/linkItem";

export default function Index(a: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isOrg, setIsOrg] = useState(ActiveUser.ME);

  return (
    <div className={styles.container}>
      <NavBar />
      <Sidebar setIsOrg={setIsOrg} isOrg={isOrg} />
      {isOrg === ActiveUser.ORG ? (
        <OrgSidebar
          setActiveIndex={a.setActiveIndex}
          activeIndex={a.activeIndex}
        />
      ) : (
        <SecSidebar
          setActiveIndex={a.setActiveIndex}
          activeIndex={a.activeIndex}
        />
      )}

      <Home activeIndex={a.activeIndex} />
      <ChatSection activeIndex={a.activeIndex} />
      <ProjectsSection
        activeIndex={a.activeIndex}
        setActiveIndex={a.setActiveIndex}
      />
      <TasksSection activeIndex={a.activeIndex} />
      <GoalsView activeIndex={a.activeIndex} />
      <SettingsView activeIndex={a.activeIndex} />
    </div>
  );
}

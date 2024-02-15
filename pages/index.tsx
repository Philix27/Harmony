import React from "react";
import "styles/index";
import { useAppSelector } from "hooks";
import { SidebarAccounts, get_active_tab, NavBar } from "comps";

export default function Index() {
  const activeTab = useAppSelector((s) => s.tabs);
  return (
    <div>
      <NavBar />
      <SidebarAccounts />
      {get_active_tab(activeTab.name)}
    </div>
  );
}

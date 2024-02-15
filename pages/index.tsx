import React from "react";
import "styles/index";
import { useAppSelector } from "app/hooks";
import { SidebarAccounts, get_active_tab, NavBar } from "app/comps";

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

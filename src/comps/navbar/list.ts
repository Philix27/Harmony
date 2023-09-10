import { TabsType } from "./types";

type T = { title: string; type: TabsType };
export const tabList: Array<T> = [
  {
    title: "Home",
    type: "HOME",
  },
  {
    title: "Chat",
    type: "CHAT",
  },
  {
    title: "Finance",
    type: "FINANCE",
  },
  {
    title: "Notes",
    type: "NOTES",
  },
  {
    title: "Tasks",
    type: "TASKS",
  },
];

import { MdNotes, MdOtherHouses, MdTask } from "react-icons/md";
import Home from "views/home/home";
import TasksSection from "views/tasks";
import GoalsView from "views/goals/goals";
import CanvasFrame from "views/canvas/canvas";
import { ILinkItem, TabsType } from "./types";
import ChatApp from "views/chat";
import NotesView from "views/notes";
import { RiArtboardFill } from "react-icons/ri";
import { BsChatFill } from "react-icons/bs";

export const TabItems: Array<ILinkItem> = [
  {
    title: "Chat",
    type: "CHAT",
    icon: <BsChatFill />,
    comp: <ChatApp />,
  },
  {
    title: "Tasks",
    type: "TASKS",
    icon: <MdTask />,
    comp: <TasksSection />,
  },
  {
    title: "Notes",
    type: "NOTES",
    icon: <MdNotes />,
    comp: <NotesView />,
  },
  {
    title: "Canvas",
    type: "CANVAS",
    icon: <RiArtboardFill />,
    comp: <CanvasFrame />,
  },
  {
    title: "Others",
    type: "OTHERS",
    icon: <MdOtherHouses />,
    comp: <GoalsView />,
  },
];

export function get_active_tab(params: TabsType): JSX.Element {
  const v = TabItems.filter((v) => v.type === params)[0]?.comp;
  return v || <Home />;
}

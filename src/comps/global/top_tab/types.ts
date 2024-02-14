export type TabsType = "CHAT" | "TASKS" | "NOTES" | "CANVAS" | "OTHERS";
export interface ILinkItem {
  id?: number;
  type: TabsType;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}
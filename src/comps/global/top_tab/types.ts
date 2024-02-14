import { TabsType } from "types";

export interface ILinkItem {
  id?: number;
  type: TabsType;
  title: string;
  icon: JSX.Element;
  comp: JSX.Element;
}
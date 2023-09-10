import { TabsType } from "comps/navbar/types";

export interface IPayload {
  name: TabsType;
  org_name: string;
}

export const initialState: IPayload = {
  name: "CHAT",
  org_name: "ORG",
};

export type TABS = "CHAT" | "TASKS" | "NOTES" | "FINANCE";

export interface IPayload {
  tab: TABS;
}

export const initialState: IPayload = {
  tab: "CHAT",
};

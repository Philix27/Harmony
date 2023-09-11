import { ChatTabsType } from "views/chat/sidebar/types";


export interface IPayload {
  is_info_bar_open?: boolean;
  active_tab?: ChatTabsType;
}

export const initialState: IPayload = {
  is_info_bar_open: false,
  active_tab: "HOME",
};

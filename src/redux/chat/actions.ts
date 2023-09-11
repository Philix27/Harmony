import { PayloadAction } from "@reduxjs/toolkit";
import { IPayload } from "./types";
import { ChatTabsType } from "views/chat/sidebar/types";

function openInfoBar(state: IPayload, action: PayloadAction<IPayload>) {
  state.is_info_bar_open = !state.is_info_bar_open;
}
function change_tab(state: IPayload, action: PayloadAction<ChatTabsType>) {
  state.active_tab = action.payload;
}

const Actions = {
  change_tab,
  openInfoBar,
};
export default Actions;

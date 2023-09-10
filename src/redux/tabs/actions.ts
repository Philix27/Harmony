import { PayloadAction } from "@reduxjs/toolkit";
import { IPayload } from "./types";

function change_tab(state: IPayload, action: PayloadAction<IPayload>) {
  state.tab = action.payload.tab;
}

const Actions = {
  change_tab,
};
export default Actions;

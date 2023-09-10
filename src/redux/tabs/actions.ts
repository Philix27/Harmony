import { PayloadAction } from "@reduxjs/toolkit";
import { IPayload } from "./types";

function change_tab(state: IPayload, action: PayloadAction<IPayload>) {
  state.name = action.payload.name;
}

const Actions = {
  change_tab,
};
export default Actions;

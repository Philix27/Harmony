import { PayloadAction } from "@reduxjs/toolkit";
import { IPayload, TypeCreateAccountStep } from "./types";

function open_workflow(state: IPayload, action: PayloadAction) {
  state.is_open = !state.is_open;
}
function change_tab(state: IPayload, action: PayloadAction<IPayload>) {
  state.active_tab = action.payload.active_tab;
}
function create_account_modal(
  state: IPayload,
  action: PayloadAction<"SHOW" | "HIDE">
) {
  state.create_account_modal = action.payload;
}
function create_account_steps(
  state: IPayload,
  action: PayloadAction<TypeCreateAccountStep>
) {
  state.create_account_step = action.payload;
}

const Actions = {
  open_workflow,
  change_tab,
  create_account_modal,
  create_account_steps,
};
export default Actions;

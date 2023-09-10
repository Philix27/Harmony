export type TypeCreateAccountStep =
  | "1. SET_NEW_CORPORATE_ACCOUNT"
  | "2. VERIFY_INCORPORATION_DOCS"
  | "3. VERIFY_PERSONAL_DETAILS"
  | "4. CORPORATE_ACCOUNT_DETAILS"
  | "5. CONGRATULATIONS"
  | "6. ERROR";

export interface IPayload {
  is_open?: boolean;
  active_tab?: string;
  create_account_modal?: "SHOW" | "HIDE";
  create_account_step?: TypeCreateAccountStep;
}

export const initialState: IPayload = {
  is_open: false,
  active_tab: "VIRTUAL_CARD",
  create_account_modal: "HIDE",
  create_account_step: "1. SET_NEW_CORPORATE_ACCOUNT",
};

import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store/index";
import { AppActions } from "redux/store/persist";

export function useAppDispatch() {
  return { dispatch: useDispatch<AppDispatch>(), actions: AppActions };
}

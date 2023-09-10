import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "redux/store/index";
import { AppActions } from "redux/store/persist";

type AppReducers = {};
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export function useAppDispatch() {
  return { dispatch: useDispatch<AppDispatch>(), actions: AppActions };
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

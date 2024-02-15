import React from "react";

import { MdCall, MdFavorite, MdGroups, MdSettings } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "hooks";
import { FaHome } from "react-icons/fa";

export default function TopBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <div className={"top"}>
      <div
        className={`${"icon"} ${
          selector.active_tab === "CHAT" ? "active" : ""
        }`}
      >
        <MdGroups onClick={() => dispatch(actions.chat.change_tab("CHAT"))} />
      </div>
      <div
        className={`${"icon"} ${
          selector.active_tab === "SETTINGS" ? "active" : ""
        }`}
      >
        <MdSettings
          onClick={() => dispatch(actions.chat.change_tab("SETTINGS"))}
        />
      </div>
      <div
        className={`${"icon"} ${
          selector.active_tab === "FAVORITE" ? "active" : ""
        }`}
      >
        <MdFavorite
          onClick={() => dispatch(actions.chat.change_tab("FAVORITE"))}
        />
      </div>
      <div
        className={`${"icon"} ${
          selector.active_tab === "CALLS" ? "active" : ""
        }`}
      >
        <MdCall onClick={() => dispatch(actions.chat.change_tab("CALLS"))} />
      </div>
    </div>
  );
}

import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import TopBar from "./topBar";
import Channels from "./channels";
import { ChatTabsType } from "./types";
import ChatCallsList from "./calls";

export default function SideBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <div className={styles.container}>
      <TopBar />
      {getView(selector.active_tab!)}
    </div>
  );
}

function getView(props: ChatTabsType): JSX.Element {
  switch (props) {
    case "CALLS":
      return <ChatCallsList />;
    case "CHAT":
      return <Channels />;
    case "FAVORITE":
      return <Channels />;
    case "SETTINGS":
      return <Channels />;
    default:
      return <Channels />;
      break;
  }
}

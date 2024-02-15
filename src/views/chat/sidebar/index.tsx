import { useAppDispatch, useAppSelector } from "app/hooks";
import TopBar from "./topBar";
import Channels from "./channels";
import ChatCallsList from "./calls";
import { ChatTabsType } from "app/types";
import { Wrapper } from "./styles";

export default function SideBar() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();
  return (
    <Wrapper>
      <TopBar />
      {getView(selector.active_tab!)}
    </Wrapper>
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

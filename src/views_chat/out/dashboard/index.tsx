import React from "react";
import classnames from "classnames";

// hooks
import { useRedux } from "../../hooks/index";

// hooks
import { useConversationUserType } from "../../hooks/index";
import ConversationUser from "./ConversationUser";
import Welcome from "./ConversationUser/Welcome";
import Leftbar from "./Leftbar";
import UserProfileDetails from "./UserProfileDetails";

interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { selectedChat } = useAppSelector(state => ({
    selectedChat: state.Chats.selectedChat,
  }));

  const { isChannel } = useConversationUserType();

  return (
    <>
      <Leftbar />

      <div
        className={classnames("user-chat", "w-100", "overflow-hidden", {
          "user-chat-show": selectedChat,
        })}
        id="user-chat"
      >
        <div className="user-chat-overlay" id="user-chat-overlay"></div>
        {selectedChat !== null ? (
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <ConversationUser isChannel={isChannel} />
            </div>
            <UserProfileDetails isChannel={isChannel} />
          </div>
        ) : (
          <Welcome />
        )}
      </div>
    </>
  );
};

export default Index;

import React from "react";
import { FaHashtag, FaPhone, FaVideo } from "react-icons/fa";
import { styled } from "styled-components";
import { MdVideoCall } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "app/hooks";

export default function ChatCallsList() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();

  return (
    <div className={"contents"}>
      <h5>Call history</h5>
      <Tile>
        <div>
          <p>Engineering </p>
        </div>
        <FaVideo color="#F6F" />
      </Tile>
      <Tile>
        <div>
          <p>Marketing</p>
        </div>
        <FaVideo color="red" />
      </Tile>
      <Tile>
        <div>
          <p>UI/UX</p>
        </div>
        <FaPhone />
      </Tile>
    </div>
  );
}

const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 2px 10px;
  align-items: center;
  /* border-bottom: solid 0.1px grey; */
  &:hover {
    background-color: grey;
    padding: 2px 10px;
    border-radius: 5px;
  }
  div {
    display: flex;
  }
  svg {
    margin-right: 10px;
    font-size: 15px;
  }
`;

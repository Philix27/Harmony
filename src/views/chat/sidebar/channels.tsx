import React from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { FaHashtag } from "react-icons/fa";
import { styled } from "styled-components";

export default function Channels() {
  const selector = useAppSelector((s) => s.chat);
  const { dispatch, actions } = useAppDispatch();

  return (
    <div className={"contents"}>
      <Tile>
        <FaHashtag />
        <p>General</p>
      </Tile>
      <Heading>
        <h5>Channels</h5>
      </Heading>
      <Tile>
        <FaHashtag />
        <p>Innocencia</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Gift</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Collins</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Fegor</p>
      </Tile>
      <Heading>
        <h5>Direct message</h5>
      </Heading>
      <Tile>
        <FaHashtag />
        <p>Magret</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Innocencia</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Gift</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Collins</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Fegor</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Magret</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Innocencia</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Gift</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Collins</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Fegor</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Magret</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Innocencia</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Gift</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Collins</p>
      </Tile>
      <Tile>
        <FaHashtag />
        <p>Fegor</p>
      </Tile>
    </div>
  );
}

const Heading = styled.div`
  margin-top: 20px;
`;

const Tile = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 2px 10px;
  border-radius: 5px;
  align-items: center;
  &:hover {
    background-color: grey;
    padding: 2px 10px;
  }
  svg {
    margin-right: 10px;
    font-size: 12px;
  }
`;

import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";
import pinned from "./pinned.svg";

const Image = styled.img``;

const Pinned = styled.img`
  padding-left: 12px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export default props => {
  if (props.tweet.pinned === false) {
    return (
      <LeftSide>
        <Image alt="image" src={avatar} />
      </LeftSide>
    );
  } else {
    return (
      <LeftSide>
        <Pinned alt="pinned" src={pinned} />
        <Image alt="image" src={avatar} />
      </LeftSide>
    );
  }
};

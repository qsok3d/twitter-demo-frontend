import React from "react";
import styled from "styled-components";
import avatar from "./avatar.svg";
import pinned from "./pinned.svg";

const Avatar = styled.div`
  border-radius: 100px;
  padding-left: 10px;
`;

const AvatarPinned = Avatar.extend`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

const PinnedImage = styled.img`
  padding-left: 30px;
`;
const AvatarImage = styled.img`
  width: 41px;
  height: 41px;
`;

export default props => {
  if (props.tweet.pinned === false) {
    return (
      <Avatar>
        <AvatarImage alt="avatar" src={avatar} />
      </Avatar>
    );
  } else {
    return (
      <AvatarPinned>
        <PinnedImage alt="pinned" src={pinned} />
        <AvatarImage alt="avatar" src={avatar} />
      </AvatarPinned>
    );
  }
};

import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";
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
  return (
    <div>
      {props.tweet.pinned ? (
        <AvatarPinned>
          <PinnedImage alt="pinned" src={pinned} />
          <AvatarImage alt="avatar" src={avatar} />
        </AvatarPinned>
      ) : (
        <Avatar>
          <AvatarImage alt="avatar" src={avatar} />
        </Avatar>
      )}
    </div>
  );
};

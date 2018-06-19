import React from "react";
import styled from "styled-components";

const TweetButton = styled.button`
  width: 128px;
  height: 39px;
  background-color: #1da1f2;
  border: none;
  border-radius: 100px;
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #fff;
  margin-right: 6px;
  margin-top: 6px;
`;

export default props => {
  return <TweetButton>{props.buttons.text}</TweetButton>;
};

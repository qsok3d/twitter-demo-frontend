import React from "react";
import styled, { css } from "styled-components";

const TwitterLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  ${props =>
    props.kind === true &&
    css`
      color: #1da1f2;
    `};
`;

export default props => {
  return (
    <TwitterLink>
      <Text kind={props.tweetHead.active}>{props.tweetHead.text}</Text>
    </TwitterLink>
  );
};

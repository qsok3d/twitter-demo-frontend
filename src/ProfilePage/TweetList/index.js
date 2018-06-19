import React from "react";
import styled from "styled-components";
import TwitterHead from "./tweetHeader";
import { tweetHead } from "./data";
import Tweet from "./tweet";

const TwitterList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  margin-top: 8px;
  border-bottom: 1px solid #e1e8ed;
`;

const TwitterNav = styled.nav`
  display: flex;
  padding: 15px 0;
  padding-left: 12px;
`;

export default props => {
  return (
    <TwitterList>
      <Header>
        <TwitterNav>
          {tweetHead.map(tweetHead => <TwitterHead tweetHead={tweetHead} />)}
        </TwitterNav>
      </Header>
      <Tweet />
    </TwitterList>
  );
};

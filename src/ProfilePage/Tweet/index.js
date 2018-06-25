import React from "react";
import styled from "styled-components";

import TweetUp from "./TweetUp";
import TweetContent from "./TweetContent";
import TweetAction from "./TweetAction";
import TweetHeader from "./tweetHeader";
import { tweet } from "./data";
import Avatar from "./Avatar";

const Tweet = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 1px solid #e1e8ed;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Action = styled.div`
  display: flex;
  align-content: center;
  padding-right: 40px;
`;

const TweetNav = styled.nav`
  display: flex;
  padding: 15px 0;
  padding-left: 12px;
`;

const tweetHead = [
  {
    text: "Tweets",
    active: false
  },
  {
    text: "Tweets & replies",
    active: true
  },
  {
    text: "Media",
    active: true
  }
];

export default () => {
  return (
    <Main>
      <TweetNav>
        {tweetHead.map(tweetHead => <TweetHeader tweetHead={tweetHead} />)}
      </TweetNav>

      {tweet.map(tweet => (
        <Tweet>
          <Avatar tweet={tweet} />
          <Main>
            <TweetUp tweet={tweet} />
            <TweetContent tweet={tweet} />
            <Action>
              {tweet.action.map(action => <TweetAction action={action} />)}
            </Action>
          </Main>
        </Tweet>
      ))}
    </Main>
  );
};

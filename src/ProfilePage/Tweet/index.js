import React from 'react';
import styled from 'styled-components';
import TweetUp from './TweetUp';
import TweetContent from './TweetContent';
import TweetAction from './TweetAction';
import TweetHeader from './tweetHeader';
import tweets from './data';
import Avatar from './Avatar';

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

export default ({ userId }) => (
  <Main>
    <TweetHeader userId={userId} />
    {tweets.map(tweet => (
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

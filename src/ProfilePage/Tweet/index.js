import React from 'react';
import styled from 'styled-components';

import Header from './TweetUp';
import Content from './TweetContent';
import Action from './TweetAction';

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

const ActionLine = styled.div`
  display: flex;
  align-content: center;
  padding-right: 40px;
`;

export default () => (
  <React.Fragment>
    <Main>
      {tweets.map(tweet => (
        <Tweet>
          <Avatar tweet={tweet} />
          <Main>
            <Header tweet={tweet} />
            <Content tweet={tweet} />
            <ActionLine>{tweet.action.map(action => <Action action={action} />)}</ActionLine>
          </Main>
        </Tweet>
      ))}
    </Main>
  </React.Fragment>
);

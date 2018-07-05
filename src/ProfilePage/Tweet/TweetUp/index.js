import React from 'react';
import styled from 'styled-components';
import Pinned from './Pinned';

const TweetPinned = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
`;

const TweetUp = styled.div`
  display: flex;
  padding-left: 10px;
`;

const Name = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #14171a;
  padding-right: 5px;
  margin: 0;
`;

const NickName = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #697787;
  padding-right: 5px;
  margin: 0;
`;

const TimeTweet = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;
  color: #697787;
  margin: 0;
`;

export default ({ tweet }) => {
  if (tweet.pinned === false) {
    return (
      <TweetUp>
        <Name>{tweet.name}</Name>
        <NickName>{tweet.nickName}</NickName>
        <TimeTweet> {tweet.timeTweet}</TimeTweet>
      </TweetUp>
    );
  }
  return (
    <TweetPinned>
      <Pinned />
      <TweetUp>
        <Name>{tweet.name}</Name>
        <NickName>{tweet.nickName}</NickName>
        <TimeTweet> {tweet.timeTweet}</TimeTweet>
      </TweetUp>
    </TweetPinned>
  );
};

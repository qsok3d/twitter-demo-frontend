import React from 'react';
import styled from 'styled-components';

const TweetAction = styled.div`
  padding-top: 15px;
  padding-right: 44px;
  display: flex;
  align-content: center;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
`;

const ButtonImage = styled.img`
  padding-right: 11px;
`;

const Count = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  color: #667580;
  margin: 0;
`;

const CountActive = Count.extend`
  color: #e32b51;
`;

export default tweet => (
  <TweetAction>
    <Button>
      <ButtonImage alt="picture" src={tweet.action.img} />
    </Button>
    {tweet.action.active ? (
      <CountActive>
        {tweet.action.count > 0 && tweet.action.count}
      </CountActive>
    ) : (
      <Count>
        {tweet.action.count > 0 && tweet.action.count}
      </Count>
    )}
  </TweetAction>
);

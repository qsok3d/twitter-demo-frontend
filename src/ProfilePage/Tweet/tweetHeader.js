import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.div`
  display: flex;
`;

const TweetNav = styled.nav`
  display: flex;
  padding: 15px 0;
  padding-left: 12px;
`;

const TwitterLink = styled(NavLink)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  text-decoration: none;
  border: none;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #1da1f2;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: black;
  }
  &.active:hover {
    text-decoration: none;
  }
`;

export default ({ userId }) => (
  <Navigation>
    <TweetNav>
      <TwitterLink exact to={`/${userId}`}>
        Tweets
      </TwitterLink>
    </TweetNav>
    <TweetNav>
      <TwitterLink exact to={`/${userId}/with_replies`}>
        Tweets & replies
      </TwitterLink>
    </TweetNav>
    <TweetNav>
      <TwitterLink exact to={`/${userId}/media`}>
        Media
      </TwitterLink>
    </TweetNav>
  </Navigation>
);

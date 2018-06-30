import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Indicator = styled(NavLink)`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: ${({ active }) => (active ? '4px solid #1DA1F2' : 'none')};
  text-decoration: none;
`;

const Stat = styled.p`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin: 0;
  color: ${({ active }) => (active ? '#1da1f2' : '#707e88')};
  padding-bottom: 6px;
`;

const Count = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  margin: 0;
  color: ${({ active }) => (active ? '#1da1f2' : '#707e88')};
`;

const Stats = styled.div`
  display: flex;
`;

export default ({ userId }) => (
  <Stats>
    <Indicator exact to={`/${userId}`}>
      <Stat>
Tweets
      </Stat>
      <Count>
8.058
      </Count>
    </Indicator>
    <Indicator exact to={`/${userId}/following`}>
      <Stat>
Following
      </Stat>
      <Count>
721
      </Count>
    </Indicator>
    <Indicator exact to={`/${userId}/followers`}>
      <Stat>
Followers
      </Stat>
      <Count>
1.815
      </Count>
    </Indicator>
    <Indicator exact to={`/${userId}/likes`}>
      <Stat>
Likes
      </Stat>
      <Count>
460
      </Count>
    </Indicator>
    <Indicator exact to={`/${userId}/lists`}>
      <Stat>
Lists
      </Stat>
      <Count>
2
      </Count>
    </Indicator>
  </Stats>
);

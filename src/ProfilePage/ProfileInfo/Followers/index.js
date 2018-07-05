import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import follower from './follower.svg';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const FollowHeader = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const Follower = styled.img`
  padding-right: 12px;
`;

const Text = styled.p`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #1da1f2;
  margin: 0;
`;

const UserAvatar = styled.div`
  text-decoration: none;
  border: none;
  display: flex;
  flex-wrap: wrap;
`;

const picture = [
  {
    img: one,
  },
  {
    img: two,
  },
  {
    img: three,
  },
  {
    img: four,
  },
  {
    img: five,
  },
  {
    img: six,
  },
];

export default () => (
  <Followers>
    <FollowHeader>
      <Follower alt="follow" src={follower} />
      <Text>6 Followers you know</Text>
    </FollowHeader>
    <UserAvatar>{picture.map(imageAvatar => <Avatar imageAvatar={imageAvatar} />)}</UserAvatar>
  </Followers>
);

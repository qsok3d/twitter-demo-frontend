import React from 'react';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import AboutProfile from './AboutProfile';
import Followers from './Followers';
import Media from './Media';
import aboutUser from './data';

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 128px;
  height: 39px;
  background-color: #1da1f2;
  border: none;
  border-radius: 100px;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #fff;
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 18px;
`;

export default ({ userId }) => (
  <ProfileInfo>
    <ProfileHeader userId={userId} />
    <About>
      {aboutUser.map(about => <AboutProfile about={about} />)}
    </About>
    <Buttons>
      <Button>
Tweet to
      </Button>
      <Button>
Message
      </Button>
    </Buttons>
    <Followers />
    <Media />
  </ProfileInfo>
);

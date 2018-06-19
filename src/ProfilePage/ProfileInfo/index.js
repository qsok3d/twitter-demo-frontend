import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import AboutProfile from "./AboutProfile";
import Button from "./Button";
import Followers from "./Followers";
import Media from "./Media";
import { about, buttons } from "./data";

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

export default () => {
  return (
    <ProfileInfo>
      <ProfileHeader />
      <About>{about.map(about => <AboutProfile about={about} />)}</About>
      <Buttons>{buttons.map(buttons => <Button buttons={buttons} />)}</Buttons>
      <Followers />
      <Media />
    </ProfileInfo>
  );
};

import React from "react";
import Header from "./Header";
import image from "./image.png";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

const MainImage = styled.img``;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  background-color: #e6ecf0;
  display: flex;
`;

export default () => {
  return (
    <ProfilePage>
      <Header />
      <MainImage alt="main" src={image} />
      <Profile>
        <ProfileInfo />
      </Profile>
    </ProfilePage>
  );
};

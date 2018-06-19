import React, { Component } from "react";
import Header from "./Header";
import image from "./image.png";
import styled from "styled-components";

const MainImage = styled.img``;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <ProfilePage>
      <Header />
      <MainImage alt="main" src={image} />
    </ProfilePage>
  );
};

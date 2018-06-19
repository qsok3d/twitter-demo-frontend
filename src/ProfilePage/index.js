import React from "react";
import Header from "./Header";
import image from "./image.png";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import TweetList from "./TweetList";

const MainImage = styled.img``;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  background-color: #e6ecf0;
`;

export default () => {
  return (
    <ProfilePage>
      <Header />
      <MainImage alt="main" src={image} />
      <Profile>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <ProfileInfo />
            </div>
            <div className="col-offset-3 col-xs-6">
              <TweetList />
            </div>
          </div>
        </div>
      </Profile>
    </ProfilePage>
  );
};

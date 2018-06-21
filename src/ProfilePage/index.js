import React from "react";
import Header from "./Header";
import image from "./image.png";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import TweetList from "./TweetList";
import Recommendation from "./Recommendation";

const MainImage = styled.img``;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
            <div className="col-offset-9 col-xs-3">
              <Recommendation />
            </div>
          </div>
        </div>
      </Profile>
    </ProfilePage>
  );
};

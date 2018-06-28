import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import image from './image.png';
import TwitterBar from './TwitterBar';
import ProfileInfo from './ProfileInfo';
import Tweet from './Tweet';
import Recommendation from './Recommendation';

const MainImage = styled.img``;

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Profile = styled.div`
  display: flex;
  background-color: #e6ecf0;
  padding-top: 9px;
`;

export default ({ match }) => {
  const { userId } = match.params;
  return (
    <ProfilePage>
      <MainImage alt="main" src={image} />
      <TwitterBar />
      <Profile>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <Route exact path={`/${userId}`} render={() => <ProfileInfo userId={userId} />} />
            </div>
            <div className="col-offset-3 col-xs-6">
              <Route exact path={`/${userId}`} render={() => <Tweet userId={userId} />} />
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

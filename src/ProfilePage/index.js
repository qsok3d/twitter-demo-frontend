import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import image from './image.png';
import TwitterBar from './TwitterBar';
import ProfileInfo from './ProfileInfo';
import Tweet from './Tweet';
import Recommendation from './Recommendation';
import TweetHeader from './TweetHeader';

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
      <TwitterBar userId={userId} />
      <Profile>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <ProfileInfo userId={userId} />
            </div>
            <div className="col-offset-3 col-xs-6">
              <React.Fragment>
                <TweetHeader userId={userId} />
                <Route exact path={`/${userId}`} render={() => <Tweet userId={userId} />} />
                <Route
                  exact
                  path={`/${userId}/with_replies`}
                  render={() => <h1> With replies </h1>}
                />
                <Route exact path={`/${userId}/media`} render={() => <h1> Media </h1>} />
              </React.Fragment>
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

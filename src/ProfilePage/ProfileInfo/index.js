import React from 'react';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';
import AboutProfile from './AboutProfile';
import Followers from './Followers';
import Media from './Media';

const ProfileInfo = styled.div`
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

class Profile extends React.Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    const url = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;

    fetch(`${url}/api/v1/accounts/1?access_token=${secretCode}`)
      .then(response => response.json())
      .then(userData => this.setState({ userData }));
  }

  render() {
    const { userData } = this.state;
    console.log(userData);
    return (
      <ProfileInfo>
        <ProfileHeader userId={userData} />
        <AboutProfile userId={userData} />

        <Buttons>
          <Button>
Tweet to
          </Button>
          <Button>
Message
          </Button>
        </Buttons>
        <Followers userId={userData} />
        <Media />
      </ProfileInfo>
    );
  }
}

export default Profile;

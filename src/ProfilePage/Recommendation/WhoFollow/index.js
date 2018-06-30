import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Follow from './follow';
import dismiss from './dismiss.svg';
import avaAi from './avaAi.png';
import avaCredo from './avaCredo.png';
import avaE from './avaE.png';
import approved from './approved.svg';
import people from './people.svg';

const WhoFollow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  padding: 15px 16px;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
  color: #292f33;
  padding-right: 6px;
`;

const Refresh = styled.button`
  border: none;
  color: #1da1f2;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  margin-right: 6px;
  background-color: #fff;
`;

const View = styled(NavLink)`
  text-decoration: none;
  border: none;
  color: #1da1f2;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const Footer = styled.footer`
  padding: 20px 16px;
  display: flex;
`;

const People = styled.img`
  padding-right: 6px;
`;

const Text = styled.p`
  color: #1da1f2;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
`;

const flws = [
  {
    approve: false,
    img: avaAi,
    nick: 'AppleIdside',
    user: '@appleinsider',
    dismiss,
    imgappr: approved,
  },
  {
    approve: true,
    img: avaCredo,
    nick: 'Credo',
    user: '@Credo',
    dismiss,
    imgappr: approved,
  },
  {
    approve: false,
    img: avaE,
    nick: 'Epiphany Search',
    user: '@Epiph...',
    dismiss,
    imgappr: approved,
  },
];

export default ({ userId }) => (
  <WhoFollow>
    <Header>
      <Title>
Who to follow
      </Title>
      <Refresh>
Refresh
      </Refresh>
      <View exact to={`/${userId}/ViewAll`}>
        View all
      </View>
    </Header>
    {flws.map(flw => <Follow flw={flw} />)}
    <Footer>
      <People alt="pic" src={people} />
      <Text>
Find people you know
      </Text>
    </Footer>
  </WhoFollow>
);

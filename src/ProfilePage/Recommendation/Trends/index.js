import React from 'react';
import styled from 'styled-components';
import Theme from './theme';

const Trends = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: #fff;
  padding-bottom: 47px;
  padding: 0 16px;
`;

const Header = styled.header`
  display: flex;
  padding: 15px 0;
`;

const Title = styled.h2`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  padding-right: 17px;
`;

const Change = styled.button`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: #1da1f2;
  background-color: #fff;
  border: none;
  padding: 0;
`;

const themes = [
  {
    title: '#BringYourDogToWorkDay',
  },
  {
    title: '#FridayFeeling',
    subtitle: '12.1K Tweets',
  },
  {
    title: '#BrexitAnniversary',
    subtitle: 'It`s one year since the UK voted to leave the European Union',
  },
  {
    title: 'HMS Queen Elizabeth',
    subtitle: '1,036 Tweets',
  },
  {
    title: 'Joe Budden',
    subtitle: '1,036 Tweets',
  },
  {
    title: 'Trident',
    subtitle: '6,136 Tweets',
  },
];

export default () => (
  <Trends>
    <Header>
      <Title>United Kingdom Trends</Title>
      <Change>Change</Change>
    </Header>
    {themes.map(theme => <Theme theme={theme} />)}
  </Trends>
);

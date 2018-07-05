import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = styled.footer`
  padding-top: 23px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const Nav = styled(NavLink)`
  text-decoration: none;
  border: none;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #718290;
  margin: 0;
  padding-right: 3px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #718290;
  margin: 0;
  padding-right: 3px;
`;

export default () => (
  <Footer>
    <Navigation>
      <Text>© 2018</Text>
      <Nav to="/Twitter">Twitter</Nav>
      <Nav to="/About">About</Nav>
      <Nav to="/HelpCenter">Help Center</Nav>
      <Nav to="/Terms">Terms</Nav>
      <Nav to="/PrivacyPolicy">Privacy policy</Nav>
      <Nav to="/Cookies">Cookies</Nav>
      <Nav to="/Ads">Ads</Nav>
      <Nav to="/Info">Info</Nav>
    </Navigation>
  </Footer>
);

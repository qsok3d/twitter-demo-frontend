import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding-top: 23px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const Nav = styled.a`
  text-decoration: none;
  border: none;
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #718290;
  margin: 0;
  padding-right: 3px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #718290;
  margin: 0;
  padding-right: 3px;
`;

export default () => {
  return (
    <Footer>
      <Navigation>
        <Text>© 2018</Text>
        <Nav>Twitter</Nav>
        <Nav>About</Nav>
        <Nav>Help Center</Nav>
        <Nav>Terms</Nav>
        <Nav>Privacy policy</Nav>
        <Nav>Cookies</Nav>
        <Nav>Ads</Nav>
        <Nav>Info</Nav>
      </Navigation>
    </Footer>
  );
};

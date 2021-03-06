import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import home from "./home.svg";
import moments from "./moments.svg";
import notifications from "./notifications.svg";
import messages from "./messages.svg";

const NavSec = styled.div`
  display: flex;
`;

const NavBar = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-right: 20px;
  text-decoration: none;
  border: none;
`;

const Pic = styled.img`
  padding-right: 6px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 600;
  color: #667580;
`;

export default () => {
  return (
    <NavSec>
      <NavBar to="/Home">
        <Pic alt="pic" src={home} />
        <Text>Home</Text>
      </NavBar>
      <NavBar to="/Moments">
        <Pic alt="pic" src={moments} />
        <Text>Moments</Text>
      </NavBar>
      <NavBar to="/Notifications">
        <Pic alt="pic" src={notifications} />
        <Text>Notifications</Text>
      </NavBar>
      <NavBar to="/Messages">
        <Pic alt="pic" src={messages} />
        <Text>Messages</Text>
      </NavBar>
    </NavSec>
  );
};

import React from "react";
import styled from "styled-components";

const NavBar = styled.a`
  display: flex;
  align-items: center;
  padding-right: 20px;
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

export default props => {
  return (
    <NavBar>
      <Pic alt="pic" src={props.nav.img} />
      <Text>{props.nav.text}</Text>
    </NavBar>
  );
};

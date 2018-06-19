import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { nav } from "./data";

const NavSec = styled.div`
  display: flex;
`;

export default () => {
  return <NavSec>{nav.map(nav => <NavBar nav={nav} />)}</NavSec>;
};

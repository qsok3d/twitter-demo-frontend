import React from "react";
import styled from "styled-components";
import Finder from "./Finder";
import twitter from "./twitter.svg";
import Navigation from "./Navigation";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #ffffff;
`;

const TwitterLogo = styled.img``;

export default () => {
  return (
    <div className="container">
      <Wrap>
        <Navigation />
        <TwitterLogo alt="TwitterLogo" src={twitter} />
        <Finder />
      </Wrap>
    </div>
  );
};

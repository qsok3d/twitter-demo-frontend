import React from "react";
import styled from "styled-components";
import ProfileHeader from "./ProfileHeader";
import AboutProfile from "./AboutProfile";
import Button from "./Button";
import { about, buttons } from "./data";

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <ProfileHeader />
          <About>{about.map(about => <AboutProfile about={about} />)}</About>
          <Buttons>
            {buttons.map(buttons => <Button buttons={buttons} />)}
          </Buttons>
        </div>
      </div>
    </div>
  );
};

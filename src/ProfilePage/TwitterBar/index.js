import React from "react";
import styled from "styled-components";
import Stats from "./Stats";
import Button from "./Button";
import avatar from "./avatar.png";

const TwitterBar = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #b0b8be;
  padding: 9px 0;
  display: flex;
`;

const Wrap = styled.div`
  position: relative;
  border: 1px solid #fff;
  border-radius: 100px;
  background-color: #fff;
`;

const Avatar = styled.img`
  width: 172px;
  height: 172px;
  position: absolute;
  border-radius: 100px;
  background-color: #fff;
  padding: 19px;
  top: -135px;
`;

export default () => {
  return (
    <TwitterBar>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Wrap>
              <Avatar alt="pic" src={avatar} />
            </Wrap>
          </div>
          <div className="col-offset-3 col-xs-6">
            <Stats />
          </div>
          <div className="col-offset-9 col-xs-3">
            <Button />
          </div>
        </div>
      </div>
    </TwitterBar>
  );
};

import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  padding-right: 5px;
  width: 83px;
  height: 83px;
  padding-bottom: 6px;
`;

export default props => {
  return <Avatar alt="ava" src={props.ava.img} />;
};

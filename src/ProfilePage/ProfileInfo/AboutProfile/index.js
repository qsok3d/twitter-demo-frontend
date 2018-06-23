import React from "react";
import styled from "styled-components";

const About = styled.div`
  display: flex;
  align-items: center;
`;

const Pic = styled.img`
  padding-right: 12px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 28px;
  font-weight: 400;
  margin: 0;
  color: ${props => (props.active ? "#707e88" : "#1da1f2")};
`;

export default props => {
  return (
    <About>
      <Pic alt="pic" src={props.about.img} />
      <Text active={props.about.link}>{props.about.text}</Text>
    </About>
  );
};

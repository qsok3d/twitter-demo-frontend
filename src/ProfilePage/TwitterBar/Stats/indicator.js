import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: ${props => (props.active ? "4px solid #1DA1F2" : "none")};
`;

const Stat = styled.p`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin: 0;
  color: ${props => (props.active ? "#1da1f2" : "#707e88")};
  padding-bottom: 6px;
`;

const Count = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  margin: 0;
  color: ${props => (props.active ? "#1da1f2" : "#707e88")};
`;

export default props => {
  return (
    <Indicator active={props.indicator.active}>
      <Stat active={props.indicator.active}>{props.indicator.text}</Stat>
      <Count active={props.indicator.active}>{props.indicator.count}</Count>
    </Indicator>
  );
};

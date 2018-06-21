import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 18px;
  justify-content: center;
  align-items: center;
`;

const Stat = styled.p`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: #707e88;
  margin: 0;
  padding-bottom: 6px;
`;

const Count = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #707e88;
  margin: 0;
`;

export default props => {
  return (
    <Indicator>
      <Stat>{props.indicator.text}</Stat>
      <Count>{props.indicator.count}</Count>
    </Indicator>
  );
};

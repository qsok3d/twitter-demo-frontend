import React from "react";
import styled from "styled-components";
import Indicator from "./indicator";

const Stats = styled.div`
  display: flex;
`;

const indicator = [
  {
    text: "Tweets",
    count: 8.058,
    active: "active"
  },
  {
    text: "Following",
    count: 721,
    active: ""
  },
  {
    text: "Followers",
    count: 1.815,
    active: ""
  },
  {
    text: "Likes",
    count: 460,
    active: ""
  },
  {
    text: "Lists",
    count: 2,
    active: ""
  }
];

export default () => {
  return (
    <Stats>
      {indicator.map(indicator => <Indicator indicator={indicator} />)}
    </Stats>
  );
};

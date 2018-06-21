import React from "react";
import styled from "styled-components";
import Indicator from "./indicator";

const Stats = styled.div`
  display: flex;
`;

const indicator = [
  {
    text: "Tweets",
    count: "8,058"
  },
  {
    text: "Following",
    count: "721"
  },
  {
    text: "Followers",
    count: "1,815"
  },
  {
    text: "Likes",
    count: "460"
  },
  {
    text: "Lists",
    count: "2"
  }
];

export default () => {
  return (
    <Stats>
      {indicator.map(indicator => <Indicator indicator={indicator} />)}
    </Stats>
  );
};

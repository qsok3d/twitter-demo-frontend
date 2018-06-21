import React from "react";
import styled from "styled-components";
import WhoFollow from "./WhoFollow";

const Recommendation = styled.div`
  box-sizing: border-box;
`;

export default () => {
  return (
    <Recommendation>
      <WhoFollow />
    </Recommendation>
  );
};

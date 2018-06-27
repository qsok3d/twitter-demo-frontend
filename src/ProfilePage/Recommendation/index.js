import React from 'react';
import styled from 'styled-components';
import WhoFollow from './WhoFollow';
import Trends from './Trends';
import Footer from './Footer';

const Recommendation = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Recommendation>
    <WhoFollow />
    <Trends />
    <Footer />
  </Recommendation>
);

import React from 'react';
import styled from 'styled-components';

const Them = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const Title = styled.h2`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  color: #1da1f2;
  margin: 0;
`;

const SubTitle = styled.p`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #707e88;
  margin: 0;
`;

export default ({ theme }) => (
  <Them>
    <Title>{theme.title}</Title>
    <SubTitle>{theme.subtitle}</SubTitle>
  </Them>
);

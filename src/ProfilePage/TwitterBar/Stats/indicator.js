import React from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: ${({ active }) => (active ? '4px solid #1DA1F2' : 'none')};
`;

const Stat = styled.p`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  margin: 0;
  color: ${({ active }) => (active ? '#1da1f2' : '#707e88')};
  padding-bottom: 6px;
`;

const Count = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  margin: 0;
  color: ${({ active }) => (active ? '#1da1f2' : '#707e88')};
`;

export default ({ indicator }) => (
  <Indicator active={indicator.active}>
    <Stat active={indicator.active}>
      {indicator.text}
    </Stat>
    <Count active={indicator.active}>
      {indicator.count}
    </Count>
  </Indicator>
);

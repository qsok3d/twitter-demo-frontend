import React from 'react';
import styled from 'styled-components';

const Pinned = styled.div`
  padding-bottom: 4px;
  padding-left: 10px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: #707e88;
  margin: 0;
`;

export default () => (
  <Pinned>
    <Text>
Pinned Tweet
    </Text>
  </Pinned>
);

import React from 'react';
import styled from 'styled-components';

const About = styled.div`
  display: flex;
  align-items: center;
`;

const Pic = styled.img`
  padding-right: 12px;
`;

const Text = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 28px;
  font-weight: 400;
  margin: 0;
  color: ${({ active }) => (active ? '#1da1f2' : '#707e88')};
`;

export default ({ about }) => (
  <About>
    <Pic alt="pic" src={about.img} />
    <Text active={about.link}>
      {about.text}
    </Text>
  </About>
);

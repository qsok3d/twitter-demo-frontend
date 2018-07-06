import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import link from './link.svg';
import location from './location.svg';
import calendar from './calendar.svg';

const About = styled.div`
  display: flex;
  align-items: center;
`;

const AboutProfile = styled.div`
  display: flex;
  flex-direction: column;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export default ({ userId }) => (
  <AboutProfile>
    <About>
      <Pic alt="pic" src={location} />
      <Text>
        {userId.location}
      </Text>
    </About>
    <About>
      <Pic alt="pic" src={link} />
      <Text>
        {userId.url}
      </Text>
    </About>
    <About>
      <Pic alt="pic" src={calendar} />
      <Text>
        Joined
        {format(userId.created_at, ' MMMM YYYY ')}
      </Text>
    </About>
  </AboutProfile>
);

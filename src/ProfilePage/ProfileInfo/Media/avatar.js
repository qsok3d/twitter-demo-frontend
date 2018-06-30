import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  padding-right: 5px;
  width: 83px;
  height: 83px;
  padding-bottom: 6px;
`;

export default ({ picAvatar }) => <Avatar alt="ava" src={picAvatar.img} />;

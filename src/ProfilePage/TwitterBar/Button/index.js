import React from 'react';
import styled from 'styled-components';
import more from './more.svg';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0;
`;

const Follow = styled.button`
  width: 99px;
  height: 39px;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #1da1f2;
  margin: 0;
  background-color: #fff;
  margin-right: 18px;
`;

const More = styled.img``;

export default () => (
  <Wrap>
    <Follow>Follow</Follow>
    <More alt="pic" src={more} />
  </Wrap>
);

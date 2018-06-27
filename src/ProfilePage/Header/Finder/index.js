import React from 'react';
import styled from 'styled-components';
import search from './search.svg';

const Finder = styled.div`
  display: flex;
`;

const Search = styled.div`
  display: flex;
  position: relative;
  padding-right: 15px;
`;

const SearchInput = styled.input`
  width: 220px;
  border-radius: 100px;
  border: 1px solid #e6ecf0;
  background-color: #f5f8fa;
  padding-left: 11px;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: #687b8a;
`;

const SearchPic = styled.img`
  position: absolute;
  right: 24px;
  top: 25%;
`;

const Avatar = styled.img`
  padding-right: 15px;
`;

const TweetButton = styled.button`
  width: 72px;
  height: 32px;
  background-color: #1da1f2;
  border: none;
  border-radius: 100px;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #fff;
`;

export default () => (
  <Finder>
    <Search>
      <SearchInput placeholder="Search Twitter" />
      <SearchPic alt="search" src={search} />
    </Search>
    <Avatar alt="avatar" src={`${process.env.PUBLIC_URL}/Image/avatar.png`} />
    <TweetButton>
Tweet
    </TweetButton>
  </Finder>
);

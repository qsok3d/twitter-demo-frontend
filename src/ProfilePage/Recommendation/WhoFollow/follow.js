import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Follow = styled.div`
  display: flex;
  padding-top: 12px;
  border-bottom: 1px solid #e6ecf0;
  box-sizing: border-box;
  margin: 0 16px;
  position: relative;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  padding-right: 16px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLink = styled(NavLink)`
  display: flex;
  padding-bottom: 9px;
  text-overflow: ellipsis;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: black;
  }
  &.active:hover {
    text-decoration: none;
  }
`;

const NickName = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 600;
  color: #1da1f2;
  margin: 0;
  padding-right: 4px;
`;

const Approve = styled.img`
  padding-right: 4px;
`;

const UserName = styled.span`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  color: #697787;
  margin: 0;
  text-overflow: ellipsis;
  padding-right: 4px;
`;

const Button = styled.button`
  width: 89px;
  height: 29px;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #1da1f2;
  margin: 0;
  margin-bottom: 14px;
  background-color: #fff;
`;

const Dismiss = styled.img`
  position: absolute;
  right: 0px;
`;

export default ({ flw, userId = flw.nick }) => {
  if (flw.approve === false) {
    return (
      <Follow>
        <Avatar alt="pic" src={flw.img} />
        <Main>
          <HeaderLink exact to={`/${userId}`}>
            <NickName>
              {flw.nick}
            </NickName>
            <UserName>
              {flw.user}
            </UserName>
          </HeaderLink>
          <Button>
Follow
          </Button>
        </Main>
        <Dismiss alt="dissmis" src={flw.dismiss} />
      </Follow>
    );
  }
  return (
    <Follow>
      <Avatar alt="pic" src={flw.img} />
      <Main>
        <HeaderLink exact to={`/${userId}`}>
          <NickName>
            {flw.nick}
          </NickName>
          <Approve alt="pic" src={flw.imgappr} />
          <UserName>
            {flw.user}
          </UserName>
        </HeaderLink>
        <Button>
Follow
        </Button>
      </Main>
      <Dismiss alt="dissmis" src={flw.dismiss} />
    </Follow>
  );
};

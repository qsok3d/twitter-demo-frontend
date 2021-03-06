import React from "react";
import styled from "styled-components";

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

const Header = styled.header`
  display: flex;
  padding-bottom: 9px;
  text-overflow: ellipsis;
`;

const NickName = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
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
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
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
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
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

export default props => {
  if (props.flw.approve === false) {
    return (
      <Follow>
        <Avatar alt="pic" src={props.flw.img} />
        <Main>
          <Header>
            <NickName>{props.flw.nick}</NickName>
            <UserName>{props.flw.user}</UserName>
          </Header>
          <Button>Follow</Button>
        </Main>
        <Dismiss alt="dissmis" src={props.flw.dismiss} />
      </Follow>
    );
  } else {
    return (
      <Follow>
        <Avatar alt="pic" src={props.flw.img} />
        <Main>
          <Header>
            <NickName>{props.flw.nick}</NickName>
            <Approve alt="pic" src={props.flw.imgappr} />
            <UserName>{props.flw.user}</UserName>
          </Header>
          <Button>Follow</Button>
        </Main>
        <Dismiss alt="dissmis" src={props.flw.dismiss} />
      </Follow>
    );
  }
};

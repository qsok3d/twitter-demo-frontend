import React from "react";
import styled from "styled-components";
import approved from "./approved.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const ProfileHeader = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 22px;
  line-height: 22px;
  font-weight: 600;
  color: #14171a;
  padding-right: 6px;
  margin: 0;
  padding-bottom: 6px;
`;

const Approved = styled.img``;

const ProfileSubtitle = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 12px;
`;

const NickName = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #697787;
  padding-right: 8px;
  margin: 0;
`;

const Follow = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #697787;
  margin: 0;
`;

const ProfileText = styled.p`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #14171a;
  margin: 0;
  padding-right: 35px;
`;

export default () => {
  return (
    <Wrap>
      <ProfileHeader>
        <Title>Every Interaction</Title>
        <Approved alt="approve" src={approved} />
      </ProfileHeader>
      <ProfileSubtitle>
        <NickName>@EveryInteract</NickName>
        <Follow>Follows You</Follow>
      </ProfileSubtitle>
      <ProfileText>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </ProfileText>
    </Wrap>
  );
};

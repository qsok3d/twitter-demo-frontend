import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import { tweet } from "./data";

const Tweet = styled.div`
  display: flex;
`;

const InfoProfile = styled.div``;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const Head = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #14171a;
  margin: 0;
  padding-right: 6px;
`;

const NickName = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: #707e88;
  margin: 0;
  padding-right: 6px;
`;

const TweetDate = styled.span`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: #707e88;
  margin: 0;
`;

export default () => {
  return (
    <Tweet>
      <Avatar tweet={tweet[0]} />
      <MainContent>
        <Head>
          <Title>Every Interaction</Title>
          <NickName>@EveryInteract</NickName>
          <TweetDate>2 Mar 2015</TweetDate>
        </Head>
      </MainContent>
    </Tweet>
  );
};

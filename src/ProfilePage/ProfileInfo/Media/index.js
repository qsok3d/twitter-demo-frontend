import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import media from "./media.svg";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";

const Medias = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const MediaHeader = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const Media = styled.img`
  padding-right: 12px;
`;

const Text = styled.p`
  font-family: Helvetica Neue, "Lato", Helvetica, Arial, , sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #1da1f2;
  margin: 0;
`;

const Ava = styled.div`
  text-decoration: none;
  border: none;
  display: flex;
  flex-wrap: wrap;
`;

const ava = [
  {
    img: one
  },
  {
    img: two
  },
  {
    img: three
  },
  {
    img: four
  },
  {
    img: five
  },
  {
    img: six
  }
];

export default props => {
  return (
    <Medias>
      <MediaHeader>
        <Media alt="follow" src={media} />
        <Text>522 Photos and videos</Text>
      </MediaHeader>
      <Ava>{ava.map(ava => <Avatar ava={ava} />)}</Ava>
    </Medias>
  );
};

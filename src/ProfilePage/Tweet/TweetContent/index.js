import React from 'react';
import styled from 'styled-components';

const TweetContent = styled.div`
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10px;
  padding-right: 10px;
`;

const Text = styled.p`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 300;
  color: #292f33;
  padding-right: 15px;
  margin: 0;
`;

const Site = styled.a`
  font-family: Helvetica Neue, 'Lato', Helvetica, Arial, , sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 300;
  color: #1da1f2;
  margin: 0;
`;

const Image = styled.img`
  padding-top: 17px;
`;

export default ({ tweet }) => {
  if (tweet.img1 === '') {
    return (
      <TweetContent>
        <Text>
          {tweet.text}
        </Text>
        <Site>
          {tweet.site}
        </Site>
      </TweetContent>
    );
  }
  return (
    <TweetContent>
      <Text>
        {tweet.text}
      </Text>
      <Site>
        {tweet.site}
      </Site>
      <Image alt="pic" src={tweet.img1} />
    </TweetContent>
  );
};

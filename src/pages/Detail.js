import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Detail = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState();
  const getTweet = async () => {
    const response = await axios(
      `https://bfc331a4-84cf-4bd4-bb28-2e47ea49816d.mock.pstmn.io/tweets/${tweetId}`
    );
    setTweet(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getTweet();
  }, []);
  return tweet ? (
    <Container>
      <Header>
        <Id>{tweet.accountId}</Id>
        <Date>{tweet.createdDate}</Date>
      </Header>
      <Content>{tweet.content}</Content>
    </Container>
  ) : (
    <div>loading</div>
  );
};

const Container = styled.div`
  border-bottom: 1px solid grey;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Id = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;
const Date = styled.div`
  color: grey;
  font-weight: lighter;
`;

const Content = styled.div`
  text-decoration: none;
  color: black;
`;

export default Detail;

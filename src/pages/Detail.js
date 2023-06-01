import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Detail = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState();

  const client = axios.create();
  client.defaults.baseURL = "http://52.78.210.126:8080";
  client.defaults.withCredentials = true;

  const getTweet = async () => {
    const response = await client.get(`/tweets/${tweetId}`);
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

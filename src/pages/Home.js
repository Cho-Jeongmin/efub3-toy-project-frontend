import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Tweet from "../components/Tweet";

const Home = () => {
  const [tweets, setTweets] = useState();
  const getTweets = async () => {
    const response = await axios(
      "https://bfc331a4-84cf-4bd4-bb28-2e47ea49816d.mock.pstmn.io/tweets"
    );
    setTweets(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getTweets();
  }, []);
  return tweets ? (
    <Container>
      {tweets.map((tweet) => (
        <Tweet key={tweet.tweetId} tweet={tweet} />
      ))}
    </Container>
  ) : (
    <div>loading</div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid grey;
  width: 500px;
`;

export default Home;

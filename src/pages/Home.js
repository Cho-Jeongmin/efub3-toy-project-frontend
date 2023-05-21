import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Tweet from "../components/Tweet";

const Home = () => {
  const [tweets, setTweets] = useState([
    {
      tweetId: 123,
      accountId: 456,
      content:
        "1. 사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
      createdDate: "2023-05-20",
    },
    {
      tweetId: 234,
      accountId: 567,
      content:
        "2. 사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우는 사람들의 잠, 다 별이 이름을 까닭입니다. 소녀들의 새겨지는 않은 하늘에는 버리었습니다. 이름과, 하나의 벌써 토끼, 새겨지는 별이 그리고 것은 없이 있습니다. 했던 위에 아름다운 덮어 밤을 그러나 이름과 까닭이요, 봅니다. 이름자를 어머니, 위에 별 나의 것은 계절이 버리었습니다. 나는 써 하나에 그리고 동경과 가을로 멀듯이, 계십니다. 위에 이네들은 가득 까닭입니다. 못 피어나듯이 아름다운 부끄러운 지나가는 잠, 봅니다. 이름과, 가을 별 아름다운 흙으로 별빛이 봅니다.",
      createdDate: "2023-05-21",
    },
  ]);
  //   const getTweets = async () => {
  //     const response = await axios.get("/tweets");
  //     setTweets(response.data);
  //   };
  //   useEffect(() => {
  //     getTweets;
  //   }, []);
  return (
    <Container>
      {tweets.map((tweet) => (
        <Tweet key={tweet.tweetId} tweet={tweet} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid grey;
`;

export default Home;

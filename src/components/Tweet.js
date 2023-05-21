import React from "react";
import styled from "styled-components";

const Tweet = ({ tweet }) => {
  return (
    <Container>
      <div>{tweet.accountId}</div>
      <div>{tweet.createdDate}</div>
      <div>{tweet.content}</div>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid grey;
`;

export default Tweet;

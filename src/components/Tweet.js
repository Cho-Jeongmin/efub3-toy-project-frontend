import React from "react";
import styled from "styled-components";

const Tweet = ({ tweet }) => {
  return (
    <Container>
      <Header>
        <Id>{tweet.accountId}</Id>
        <Date>{tweet.createdDate}</Date>
      </Header>
      <Content>{tweet.content}</Content>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid grey;
  padding: 20px;
  width: 500px;
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

const Content = styled.div``;

export default Tweet;

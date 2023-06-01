import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const accountId = 123;

const Profile = () => {
  const [account, setAccount] = useState();

  const client = axios.create();
  client.defaults.baseURL = "http://52.78.210.126:8080";
  client.defaults.withCredentials = true;

  const getAccount = async () => {
    const response = await client.get(`/accounts/${accountId}`);
    setAccount(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getAccount();
  }, []);
  return account ? (
    <Container>
      <Header>
        <Name>{account.name}</Name>
        <AccontId>{`@${account.accountId}`}</AccontId>
      </Header>
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
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;

const AccontId = styled.div`
  color: grey;
`;

export default Profile;

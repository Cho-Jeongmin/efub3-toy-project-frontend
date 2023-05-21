import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const id = 123;

const Profile = () => {
  const [account, setAccount] = useState({
    accountId: 123,
    userId: "Jamie0829",
    name: "조정민",
    email: "jojm0829@gmail.com",
  });
  //   const getAccount = async () => {
  //     const response = await axios.get(`/accounts/${id}`);
  //     setAccount(response.data);
  //   };
  //   useEffect(() => {
  //     getAccount;
  //   }, []);
  return (
    <Container>
      <Header>
        <Name>{account.name}</Name>
        <AccontId>{`@${account.accountId}`}</AccontId>
      </Header>
    </Container>
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

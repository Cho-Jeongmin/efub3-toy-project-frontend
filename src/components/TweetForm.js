import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const accountId = 123;

const TweetForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };

  const client = axios.create();
  client.defaults.baseURL = "http://52.78.210.126:8080";
  client.defaults.withCredentials = true;

  const onSubmit = async () => {
    const data = {
      accountId: accountId,
      content: text,
    };
    const response = await client.post("/tweets", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    navigate("/");
  };
  return (
    <Container>
      <TextArea
        value={text}
        onChange={onChange}
        placeholder="write a tweet"
      ></TextArea>
      <Button onClick={onSubmit}>Tweet</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-right: 1px solid grey;
  margin: 20px;
  margin-top: 40px;
`;

const TextArea = styled.textarea`
  min-height: 200px;
  resize: none;
  margin-bottom: 10px;
  font-size: 17px;
`;

const Button = styled.button`
  font-size: 22px;
`;

export default TweetForm;

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
  const onSubmit = async () => {
    const response = await axios.post(
      "https://bfc331a4-84cf-4bd4-bb28-2e47ea49816d.mock.pstmn.io/tweets",
      { accountId: accountId, content: text }
    );
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

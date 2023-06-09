import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const style = ({ isActive }) =>
    isActive ? { fontWeight: "bold" } : { color: "grey" };
  const onClick = () => {
    navigate("/tweet-form");
  };
  return (
    <Container>
      <NLink to="/" style={style}>
        HOME
      </NLink>
      <NLink to="/profile" style={style}>
        PROFILE
      </NLink>
      <Button onClick={onClick}>Tweet</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid grey;
  width: 150px;
  height: 97vh;
`;

const NLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  text-decoration: none;
`;

const Button = styled.button`
  margin-top: auto;
  font-size: 30px;
`;

export default Nav;

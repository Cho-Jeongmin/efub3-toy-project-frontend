import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const style = ({ isActive }) =>
    isActive ? { fontWeight: "bold" } : { color: "grey" };

  return (
    <Container>
      <NLink to="/" style={style}>
        HOME
      </NLink>
      <NLink to="/profile" style={style}>
        PROFILE
      </NLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid grey;
  width: 400px;
  height: 97vh;
`;

const NLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  text-decoration: none;
`;

export default Nav;

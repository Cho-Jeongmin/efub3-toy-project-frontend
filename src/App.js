import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
`;

export default App;

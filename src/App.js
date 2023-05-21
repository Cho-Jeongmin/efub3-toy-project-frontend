import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import TweetForm from "./components/TweetForm";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:tweetId" element={<Detail />} />
          <Route path="/tweet-form" element={<TweetForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
`;

export default App;

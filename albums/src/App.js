import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Albums from "./pages/albums";
import Home from "./pages/home";
import Info from "./pages/info";
import Login from "./pages/login";
import Posts from "./pages/posts";
import Todos from "./pages/todos";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">#AlbumLife</Link>
        <nav>
          <Link to="/todos">todos</Link>
          <Link to="/posts">posts</Link>
          <Link to="/albums">albums</Link>
          <Link to="/info">info</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

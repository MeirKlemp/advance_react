import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albums from "./pages/albums";
import Home from "./pages/home";
import Info from "./pages/info";
import Login from "./pages/login";
import Posts from "./pages/posts";
import Todos from "./pages/todos";
import PostDetail from "./pages/postDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Albums from "./pages/albums";
import Home from "./pages/home";
import Info from "./pages/info";
import Login from "./pages/login";
import Posts from "./pages/posts";
import Todos from "./pages/todos";
import Error from "./pages/error";
import PostDetail from "./pages/postDetail";
import Layout from "./components/Layout";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(NaN);
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={!user && <Navigate to="/login" />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/info" element={<Info />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/logout" />
            <Route path="*" element={<Error />} />
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

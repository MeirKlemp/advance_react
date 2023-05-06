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
import Protected from "./pages/protectedRout";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(NaN);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route element={<Layout />}>
            <Route path="/" element={!user && <Navigate to="/login" />} />
            <Route
              path="/albums"
              element={
                <Protected>
                  <Albums />
                </Protected>
              }
            />
            <Route
              path="/info"
              element={
                <Protected>
                  <Info />
                </Protected>
              }
            />
            <Route
              path="/posts"
              element={
                <Protected>
                  <Posts />
                </Protected>
              }
            />
            <Route
              path="/posts/:id"
              element={
                <Protected>
                  <PostDetail />
                </Protected>
              }
            />
            <Route path="/logout" />
            <Route path="*" element={<Error />} />
            <Route
              path="/todos"
              element={
                <Protected>
                  <Todos />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

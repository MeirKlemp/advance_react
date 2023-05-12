import { useState, useEffect, createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Albums from "./pages/albums";
import Home from "./pages/home";
import Info from "./pages/info";
import Login from "./pages/login";
import Posts from "./pages/posts";
import Todos from "./pages/todos";
import Error from "./pages/error";
import PostDetail from "./pages/postDetail";
import Photos from "./pages/photos";
import Layout from "./components/Layout";
import Logout from "./pages/logout";
import Protected from "./pages/protectedRout";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(() => {
    const saved = window.localStorage.getItem("currentUser");
    return JSON.parse(saved) || null;
  });

  // TODO: Think about it.
  useEffect(() => {
    window.localStorage.setItem("currentUser", JSON.stringify(user));
  }, [user]);

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
              path="/posts/:postId"
              element={
                <Protected>
                  <PostDetail />
                </Protected>
              }
            />
            <Route
              path="/albums/:albumId"
              element={
                <Protected>
                  <Photos />
                </Protected>
              }
            />
            <Route path="/logout" element={<Logout setUser={setUser} />} />
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

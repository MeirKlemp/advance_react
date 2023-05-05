import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const setActiveStyle = ({ isActive }) => (isActive ? "activeStyle" : null);
  return (
    <header>
      <NavLink className={setActiveStyle} to="/">
        #AlbumLife
      </NavLink>
      <nav>
        <NavLink className={setActiveStyle} to="/todos">
          todos
        </NavLink>
        <NavLink className={setActiveStyle} to="/posts">
          posts
        </NavLink>
        <NavLink className={setActiveStyle} to="/albums">
          albums
        </NavLink>
        <NavLink className={setActiveStyle} to="/info">
          info
        </NavLink>
        <NavLink className={setActiveStyle} to="/logout">
          logout
        </NavLink>
      </nav>
    </header>
  );
}

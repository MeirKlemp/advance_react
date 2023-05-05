import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/">#AlbumLife</Link>
      <nav>
        <Link to="/todos">todos</Link>
        <Link to="/posts">posts</Link>
        <Link to="/albums">albums</Link>
        <Link to="/info">info</Link>
      </nav>
    </header>
  );
}

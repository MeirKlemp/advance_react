import React from "react";
import { Link } from "react-router-dom";
import { useResource } from "../api";

export default function Albums() {
  const [albums, setAlbums] = useResource("albums");
  return (
    <div>
      <h1>Albums</h1>
      {albums && albums.map((album) => <h2 key={album.id}>{album.title}</h2>)}
    </div>
  );
}

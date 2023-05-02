import React from "react"
import { Link } from "react-router-dom"
import useApi from "../api";

export default function Albums() {
  const albums = useApi("albums");
  return (
    <div>
      <h1>Albums</h1>
      {albums && albums.map(album => <h2 key={album.id}>{album.title}</h2>)}
    </div>
  )
};

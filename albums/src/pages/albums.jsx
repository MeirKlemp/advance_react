import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useResource } from "../api";
import { UserContext } from "../App";

export default function Albums() {

  const { user } = useContext(UserContext);
  const [albums, setAlbums] = useResource("albums?userId=" + user.id);
  const [openedAlbum, setOpenedAlbum] = useState(NaN);

  const albumEls = albums?.map((album) => (
    <Album key={album.id} album={album} />
  ));

  return (
    <section>
      <h1 className="bubbles-title">Your albums</h1>
      <div className="bubbles-list">
        {albums !== null ? <section>{albumEls}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}

function Album(album) {
  return (
    <div className="bubble-info">
      <h3>{album.album.title}</h3>
      <Link to={`/albums/${album.album.id}`}>Show photos</Link>
    </div>
  );
}

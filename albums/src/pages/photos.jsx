import React from "react";
import { useParams, Link } from "react-router-dom";
import { useResource } from "../api";

export default function Photos() {
  const { albumId } = useParams();
  const [currentAlbum] = useResource("albums/" + albumId);
  const [photos] = useResource("photos?albumId=" + albumId);

  console.log("currentAlbum", currentAlbum);

  const photosEls = photos?.map((photo) => (
    <div className="bubble-info photo-detail" key={photo.id}>
      <img class="custom-style" src={photo.thumbnailUrl} />
      <h3>{photo.title}</h3>
    </div>
  ));

  if (currentAlbum === null || photos === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all albums</span>
      </Link>

      <h1 >Album</h1>
      <div className="post-detail-layout-container">
        <h2>{currentAlbum.title}</h2>
      </div>
      <h2 className="bubbles-title">photos</h2>
      <div className="bubbles-list">{photosEls}</div>
    </section>
  );
}

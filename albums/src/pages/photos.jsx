import React, { useRef, useEffect, useState } from "react";
import usePState from "../persist";
import { useParams, Link } from "react-router-dom";
import { useResource } from "../api";

export default function Photos() {
  const { albumId } = useParams();
  const [currentAlbum] = useResource("albums/" + albumId);
  const [photos] = useResource("photos?albumId=" + albumId);
  const listInnerRef = useRef();
  const [maxPhoto, setMaxPhoto] = usePState(5, "maxPhoto-" + albumId);

  const photosEls = photos?.slice(0, maxPhoto).map((photo) => (
    <div className="bubble-info photo-detail" key={photo.id}>
      <img src={photo.thumbnailUrl} />
      <h3>{photo.title}</h3>
    </div>
  ));

  if (currentAlbum === null || photos === null) {
    return <h1>Loading...</h1>;
  }

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight > scrollHeight - 15) {
        setMaxPhoto(maxPhoto + 5);
      }
    }
  };
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all albums</span>
      </Link>

      <h1>Album</h1>
      <div className="post-detail-layout-container">
        <h2>{currentAlbum.title}</h2>
      </div>
      <h2 className="bubbles-title">photos</h2>
      <div
        className="bubbles-list"
        ref={listInnerRef}
        onScroll={onScroll}
        style={{ height: "400px", overflow: "auto" }}
      >
        {photosEls}
      </div>
    </section>
  );
}

import React, { useContext, useState } from "react";
import usePState from "../persist";
import { Link, useLoaderData } from "react-router-dom";
import { useResource } from "../api";
import { UserContext } from "../App";

export default function Posts() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useResource("posts?userId=" + user.id);
  const [openedPost, setOpenedPost] = usePState(NaN, "openedPost");

  const postEls = posts?.map((post) => (
    <Post
      key={post.id}
      post={post}
      isOpened={post.id === openedPost}
      onOpenToggled={() =>
        setOpenedPost(openedPost !== post.id ? post.id : NaN)
      }
    />
  ));

  return (
    <section>
      <h1 className="bubbles-title">Your posts</h1>
      <div className="bubbles-list">
        {posts !== null ? <section>{postEls}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}

function Post({ post, isOpened, onOpenToggled }) {
  return (
    <div className="bubble-info" onClick={() => onOpenToggled?.()}>
      <h3>{post.title}</h3>
      {!isOpened ? (
        <p>{post.body.substring(0, 15)}...</p>
      ) : (
        <>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>Show comments</Link>
        </>
      )}
    </div>
  );
}

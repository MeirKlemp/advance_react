import React from "react";
import { useParams, Link } from "react-router-dom";
import { useResource } from "../api";

export default function PostDetail() {
  const { postId } = useParams();
  const [currentPost] = useResource("posts/" + postId);
  const [comments] = useResource("comments?postId=" + postId);

  const commentsEls = comments?.map((comment) => (
    <div className="bubble-info" key={comment.id}>
      <h3>
        {comment.name}{" "}
        <a href={"mailto:" + comment.email}>
          <i>{comment.email}</i>
        </a>
      </h3>
      <p>{comment.body}</p>
    </div>
  ));

  if (currentPost === null || comments === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all posts</span>
      </Link>

      <h1 className="bubbles-title">Post</h1>
      <div className="post-detail-layout-container">
        <h2>{currentPost.title}</h2>
        <p>{currentPost.body}</p>
      </div>
      <h2 className="bubbles-title">Comments</h2>
      <div className="bubbles-list">{commentsEls}</div>
    </section>
  );
}

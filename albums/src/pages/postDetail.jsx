import React from "react";
import { useParams } from "react-router-dom";
import { useResource } from "../api";

export default function PostDetail() {
  const { postId } = useParams();
  const [currentPost] = useResource("posts/" + postId);
  const [comments] = useResource("comments?postId=" + postId);

  const commentsEls = comments?.map((comment) => (
    <p key={comment.id}>{comment.body}</p>
  ));

  // TODO: Add button to go back
  // TODO: Add CSS design
  if (currentPost === null || comments === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
      <div>
        <h2>Comments</h2>
        {commentsEls}
      </div>
    </section>
  );
}

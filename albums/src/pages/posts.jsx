import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useResource } from "../api";

export default function Posts() {
  const [posts, setPosts] = useResource("posts");
  return (
    <div>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        ))}
    </div>
  );
}

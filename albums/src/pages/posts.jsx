import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useResource } from "../api";
import { UserContext } from "../App";

export default function Posts() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useResource("posts?userId=" + user.id);
  console.log(`posts: ${JSON.stringify(posts)}`);

  const postEls = posts?.map((post) => (
    <Link
      to={`/posts/${post.id}`}
      key={post.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={post.id}>
        <div className="host-van-info">
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 15)}...</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your posts</h1>
      <div className="host-vans-list">
        {posts !== null ? <section>{postEls}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}

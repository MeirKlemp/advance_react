import React from "react"
import { Link } from "react-router-dom"
import useApi from "../api";

export default function Posts() {
  const data = useApi("posts");
  console.log(data);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
};

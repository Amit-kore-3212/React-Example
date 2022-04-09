import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3>Posts</h3>
      {post && (
        <div>
          <p>{post.userId}</p>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
      <h4>Posts</h4>
      <h3>{post && post.body}</h3>
    </div>
  );
};

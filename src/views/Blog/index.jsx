import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Post } from "../../components/Post";

export function Blog() {
  const [posts, setPosts] = useState([]);
  const [path, setPath] = useState(null);

  const postsUrl = "http://localhost:8000/";

  useEffect(async () => {
    let postList = await fetch(postsUrl);
    let parsedPostList = await postList.json();
    setPosts(parsedPostList);
  }, []);

  useEffect(() => {
    console.log("Posts: ", posts);
  }, [posts]);

  return (
    <div>
      <h1>Blog</h1>
      {posts
        ? posts.map((post) => {
            return (
              <div key={post.name}>
                <Link to={`post/${post.name}`}>{post.name}</Link>
              </div>
            );
          })
        : null}
      <Routes>
        {posts
          ? posts.map((post) => {
              console.log("post: ", post.name);
              return (
                <Route
                  key={post.name}
                  path={`post/${post.name}`}
                  element={<Post props={post} />}
                />
              );
            })
          : null}
      </Routes>
    </div>
  );
}

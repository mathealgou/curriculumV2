import React, { useState, useEffect } from "react";

export function Blog() {
  const [posts, setPosts] = useState([]);
  const postsUrl = "http://localhost:8000/";

  useEffect(async () => {
    let posts = await fetch(postsUrl);
    let parsedPosts = await posts.json();
    console.log(parsedPosts);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

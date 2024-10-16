import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the static files from the Hugo build branch
    fetch("https://github.com/jayshreee10/HugoSite.git") // Replace with your GitHub Pages URL
      .then((response) => response.text());
    console.log(response).then((data) => {
      // You can parse and display the data here
      setPosts(data); // This is just a placeholder. Implement your logic to extract and display blog posts.
    });
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {/* Render your posts here */}
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;

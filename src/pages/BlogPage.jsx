import React from "react";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const location = useLocation();
  console.log(location);
  const id = location.state.id;

  return (
    <section id="blogpage">
      <div className="container">
        <h1>{id}</h1>
      </div>
    </section>
  );
};

export default BlogPage;

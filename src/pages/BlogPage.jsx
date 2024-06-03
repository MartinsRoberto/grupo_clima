import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import posts from "../assets/posts.json";
import Blog from "../components/Blog";

import "./BlogPage.css";

const BlogPage = () => {
  const [post, setPost] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const id = location.state.id;
    const foundPost = posts.find((p) => p.id === id);
    setPost(foundPost);
  }, [location]);

  if (!post) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section id="blog-page" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9 ">
            <h1 className="mb-4">
              {post.id} {post.title}{" "}
            </h1>
            <div
              className="content-single-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="row">
              <div className="col-4 p-0 col-md-12 m-md-1"><img src="https://fakeimg.pl/400x400" alt="" className="img-fluid" /></div>
              <div className="col-4 p-0 col-md-12 m-md-1"><img src="https://fakeimg.pl/400x400" alt="" className="img-fluid" /></div>
              <div className="col-4 p-0 col-md-12 m-md-1"><img src="https://fakeimg.pl/400x400" alt="" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

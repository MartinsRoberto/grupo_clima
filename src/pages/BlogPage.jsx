import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import posts from "../assets/posts.json";
import Blog from "../components/Blog";
import { FaArrowLeft } from "react-icons/fa";

import "./BlogPage.css";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [post, setPost] = useState(null);
  const [imgState, setImgState] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const id = location.state.id;
    const foundPost = posts.find((p) => p.id === id);
    setImgState(location.state.imgBlog);
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
    <section id="blog-page" className="pt-3 pb-3">
      <div className="container">
        <div className="row mt-5">
          <NavLink to="/">
            <FaArrowLeft className="mb-4 fs-3 text-black" />
          </NavLink>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-9 ">
            <img className="img-fluid mb-4 " src={imgState} alt="" />
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
              <div className="col-4 p-0 col-md-12 mb-md-1">
                <img
                  src="https://fakeimg.pl/400x400"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-4 p-0 col-md-12 mb-md-1">
                <img
                  src="https://fakeimg.pl/400x400"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-4 p-0 col-md-12 mb-md-1">
                <img
                  src="https://fakeimg.pl/400x400"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <NavLink to="/">
            <FaArrowLeft className="mb-4 fs-3 text-black" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

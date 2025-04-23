import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import posts from "../assets/posts.json";
import { FaArrowLeft } from "react-icons/fa";

import "./BlogPage.css";

const BlogPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [post, setPost] = useState(null);
  const [imgState, setImgState] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state && location.state.id) {
      const id = location.state.id;
      const foundPost = posts.find((p) => p.id === id);

      if (!foundPost) {
        navigate("/");
      } else {
        setImgState(location.state.imgBlog);
        setPost(foundPost);
      }
    } else {
      navigate("/"); // Redirect if no valid id found in location.state
    }
  }, [location, navigate]);

  if (!post) {
    return null; // Optionally render a loading indicator or handle the case where post is null
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
          <div className="col-12">
            <img
              className="img-fluid mb-4"
              src={imgState}
              alt=""
              style={{ height: "60vh", objectFit: "cover", width: "100%" }}
            />
            <h1 className="mb-4 text-color-blue">{post.title} </h1>
            <div
              className="content-single-blog"
              dangerouslySetInnerHTML={{ __html: post.content }}
              
            />
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

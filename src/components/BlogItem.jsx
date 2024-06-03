import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ id, title, text, display }) => {
  const routeState = {
    id: id,
  };

  return (
    <div className={`col-md-6 col-lg-4 mb-4 ${display}`}>
      <div className="card">
        <img
          src="https://s2.glbimg.com/11JPZhUpMXTXk0Tj7T9tjlIm6kA=/620x400/e.glbimg.com/og/ed/f/original/2016/02/15/buffalo_horison.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{text}</p>
          <Link className="btn btn-primary" to="blog" state={routeState}>
            Leia mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/blogImg/01.jpeg";
import img2 from "../assets/blogImg/02.jpg";
import img3 from "../assets/blogImg/03.jpeg";
import img4 from "../assets/blogImg/04.jpeg";

  const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4
  // Adicione outros mapeamentos conforme necessário
  };
  const BlogItem = ({ id, title, text, display }) => {
  const routeState = {
    id: id,
    imgBlog: imageMap[id],
  };

  return (
    <div className={`col-md-6 col-lg-4 mb-4 ${display}`}>
      <div className="card">
        <img
          src={imageMap[id]}
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

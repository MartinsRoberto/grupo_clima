import React from "react";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2 className="text-center text-color-blue">Blog </h2>
            <h5 className="text-center mb-5 fw-light">
              Blog Blog Blog Blog Blog Blog{" "}
            </h5>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <BlogItem title="aaaa" text="lorem lorem" display=""/>
          <BlogItem title="aaaa" text="lorem lorem" display=""/>
          <BlogItem title="aaaa" text="lorem lorem" display="d-none d-md-block"/>
          <BlogItem title="aaaa" text="lorem lorem" display="d-none d-md-block"/>
          <BlogItem title="aaaa" text="lorem lorem" display="d-none d-lg-block"/>
          <BlogItem title="aaaa" text="lorem lorem" display="d-none d-lg-block"/>
        </div>
      </div>
    </section>
  );
};

export default Blog;

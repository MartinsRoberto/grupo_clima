import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogItem from "./BlogItem";
import posts from "../assets/posts.json";

const Blog = () => {
  const [postList, setPostList] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(6);

  useEffect(() => {
    // Embaralhar a lista de posts
    const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
    setPostList(shuffledPosts);
  }, []);

  const loadMorePosts = () => {
    setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts + 3);
  };

  return (
    <section id="blog">
      <div className="container">
        <div className=" row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2 className="text-center text-color-blue">Blog</h2>
            <h5 className="text-center mb-5 fw-light">
              Blog Blog Blog Blog Blog Blog
            </h5>
          </div>
          <div className="col-md-2"></div>
        </div>
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {postList.slice(0, displayedPosts).map((post, index) => (
            <BlogItem key={index} id={post.id} title={post.title} display="" />
          ))}
        </motion.div>
        {displayedPosts < postList.length && (
          <div className="row">
            <div className="col-md-12 text-center">
              <motion.button
                className="btn btn-primary"
                onClick={loadMorePosts}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Carregar mais
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

import React from "react";

const Post = () => {
  const embedCode = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C8jrO8ji801/" data-instgrm-version="14">
      <a href="https://www.instagram.com/p/C8jrO8ji801/" target="_blank"></a>
    </blockquote>
    <script async src="//www.instagram.com/embed.js"></script>
  `;

  return (
    <div
      className="instagram-post"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default Post;

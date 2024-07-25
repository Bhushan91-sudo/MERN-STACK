// Post.js
import React from 'react';
const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Implement edit and delete functionality */}
    </div>
  );
};

export default Post;

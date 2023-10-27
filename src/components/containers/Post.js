import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body }) => (
  <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body.substring(0, 100)}...</p>
      <Link to={`/posts/${id}`} className="btn btn-primary">Read More</Link>
    </div>
  </div>
);

export default Post;
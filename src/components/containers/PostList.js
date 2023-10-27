import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import config from '../../config';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}/posts`);
        setPosts(res.data);
      } catch (error) {
        console.error("An error occurred while fetching posts: ", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;

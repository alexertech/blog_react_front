import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = ({ match }) => {
  const [post, setPost] = useState({});
  const [readingTime, setReadingTime] = useState(null);
  const postId = match.params.id;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    const fetchReadingTime = async () => {
      try {
        // Assuming you have an endpoint to fetch reading time
        const res = await axios.get(`http://localhost:3000/posts/${postId}/read-time`);
        setReadingTime(res.data.reading_time);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchPost();
    fetchReadingTime();
  }, [postId]);

  return (
    <div>
      <h1>{post.title} <small>({readingTime} min read)</small></h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;

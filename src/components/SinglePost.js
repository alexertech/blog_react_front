import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [readingTime, setReadingTime] = useState(null);
  const { id: postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await axios.get(`${config.apiUrl}/posts/${postId}`);
        setPost(postRes.data);

        // const readingTimeRes = await axios.get(`${config.apiUrl}/posts/${postId}/read-time`);
        // setReadingTime(readingTimeRes.data.reading_time);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div>
      <h1>{post.title} <small>({readingTime} min read)</small></h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;

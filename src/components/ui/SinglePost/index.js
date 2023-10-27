import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import config from '../../../config';

const SinglePost = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`${config.apiUrl}/posts/${id}`);
                setPost(res.data);
            } catch (error) {
                console.error("An error occurred while fetching data: ", error);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div>
            {location.state && location.state.successMessage && <div className="alert alert-success">{location.state.successMessage}</div>}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default SinglePost;

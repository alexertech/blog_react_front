import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [successMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.apiUrl}/posts`, { title, body });
            if (response.data && response.data.id) {
                // Redirect to the newly created post
                navigate(`/posts/${response.data.id}`, { state: { successMessage: "Post created successfully!" } });
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea className="form-control" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
        </div>
    );
}

export default CreatePost;

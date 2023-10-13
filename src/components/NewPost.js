import React, { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/posts', postData);
      alert("Post created successfully!");
    } catch (error) {
      console.error("An error occurred while sending data: ", error);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={postData.title} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea name="body" className="form-control" value={postData.body} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;

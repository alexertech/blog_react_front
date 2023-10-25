// src/App.js
   
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostLists from './components/PostLists';
import SinglePost from './components/SinglePost';
import NewPost from './components/NewPost';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostLists />} />
                <Route path="/posts/new" element={<NewPost />} />
                <Route path="/posts/:id" element={<SinglePost />} />
            </Routes>
        </Router>
    );
}



export default App;

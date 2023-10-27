import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/ui/Header';
import SinglePost from './components/containers/SinglePost';
import PostsList from './components/containers/PostList';
import CreatePost from './components/containers/CreatePost';

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/posts/:id" element={<SinglePost />} />
                    <Route path="/create" element={<CreatePost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

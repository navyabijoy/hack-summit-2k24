"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

function Forum() {
    const { user } = useUser();
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', category: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ["Announcements", "Resources", "Q&A", "General Discussion"];

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch('/api/forum');
        const data = await response.json();
        setPosts(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPost.title && newPost.content && newPost.category) {
            const response = await fetch('/api/forum', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newPost, author: user.username }),
            });
            if (response.ok) {
                fetchPosts();
                setNewPost({ title: '', content: '', category: '' });
            }
        }
    };

    const handleLike = async (id) => {
        const response = await fetch('/api/forum', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, action: 'like' }),
        });
        if (response.ok) {
            fetchPosts();
        }
    };

    const handleComment = async (id, comment) => {
        const response = await fetch('/api/forum', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, action: 'comment', data: { author: user.username, content: comment } }),
        });
        if (response.ok) {
            fetchPosts();
        }
    };

    const filteredPosts = posts
        .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(post => selectedCategory === 'All' || post.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Community Forum</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <input 
                    type="text" 
                    placeholder="Post Title" 
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full p-2 mb-2 border rounded"
                />
                <textarea 
                    placeholder="Post Content" 
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full p-2 mb-2 border rounded"
                ></textarea>
                <select 
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full p-2 mb-2 border rounded"
                >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Post</button>
            </form>

            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Search posts..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="All">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id} className={`bg-gray-100 p-4 mb-4 rounded ${post.isPinned ? 'border-2 border-red-500' : ''}`}>
                        <h2 className="text-xl font-bold">{post.title} {post.isPinned && <span className="text-red-500">(Pinned)</span>}</h2>
                        <p className="mb-2">{post.content}</p>
                        <p className="text-sm text-gray-600">Posted by: {post.author} | Category: {post.category}</p>
                        <button onClick={() => handleLike(post._id)} className="text-blue-500 mr-2">
                            Like ({post.likes})
                        </button>
                        <div className="mt-2">
                            <strong>Comments:</strong>
                            {post.comments.map((comment, index) => (
                                <p key={index} className="text-sm">{comment.author}: {comment.content}</p>
                            ))}
                            <input 
                                type="text" 
                                placeholder="Add a comment" 
                                onKeyPress={(e) => e.key === 'Enter' && handleComment(post._id, e.target.value)}
                                className="w-full p-1 mt-1 border rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;
"use client"
import React, { useState } from 'react';

function Forum() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Welcome to our community!", content: "This is a safe space for all.", author: "Admin", likes: 5, category: "Announcements", isPinned: true, comments: [] },
        { id: 2, title: "Sign language resources", content: "Share your favorite ASL learning materials here.", author: "SignLover", likes: 3, category: "Resources", comments: [] },
    ]);
    const [newPost, setNewPost] = useState({ title: '', content: '', category: '' });
    const [searchTerm] = useState('');
    const [selectedCategory] = useState('All');
    // const [showPoll, setShowPoll] = useState(false);

    const categories = ["Announcements", "Resources", "Q&A", "General Discussion"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.title && newPost.content) {
            setPosts([...posts, { ...newPost, id: posts.length + 1, author: "User", likes: 0, comments: [] }]);
            setNewPost({ title: '', content: '', category: '' });
        }
    };

    const handleLike = (id) => {
        setPosts(posts.map(post => 
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleComment = (id, comment) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, comments: [...post.comments, { author: "User", content: comment }] } : post
        ));
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

            {/* <div className="mb-4">
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

            <button onClick={() => setShowPoll(!showPoll)} className="bg-indigo-500 text-white px-4 py-2 rounded mb-4">
                Toggle Poll
            </button> */}

            {/* {showPoll && (
                <div className="bg-indigo-100 p-4 mb-4 rounded">
                    <h3 className="font-bold">Poll: Favorite ASL Learning Method</h3>
                    <div>
                        <label className="block"><input type="radio" name="poll" /> Video Tutorials</label>
                        <label className="block"><input type="radio" name="poll" /> In-person Classes</label>
                        <label className="block"><input type="radio" name="poll" /> Mobile Apps</label>
                        <label className="block"><input type="radio" name="poll" /> Books and Flashcards</label>
                    </div>
                    <button className="bg-indigo-500 text-white px-2 py-1 rounded mt-2">Submit Vote</button>
                </div>
            )} */}

            <div>
                {filteredPosts.map(post => (
                    <div key={post.id} className={`bg-gray-100 p-4 mb-4 rounded ${post.isPinned ? 'border-2 border-red-500' : ''}`}>
                        <h2 className="text-xl font-bold">{post.title} {post.isPinned && <span className="text-red-500">(Pinned)</span>}</h2>
                        <p className="mb-2">{post.content}</p>
                        <p className="text-sm text-gray-600">Posted by: {post.author} | Category: {post.category}</p>
                        <button onClick={() => handleLike(post.id)} className="text-blue-500 mr-2">
                            Like ({post.likes})
                        </button>
                        <button className="text-green-500 mr-2">😊</button>
                        <button className="text-yellow-500 mr-2">👍</button>
                        <div className="mt-2">
                            <strong>Comments:</strong>
                            {post.comments.map((comment, index) => (
                                <p key={index} className="text-sm">{comment.author}: {comment.content}</p>
                            ))}
                            <input 
                                type="text" 
                                placeholder="Add a comment" 
                                onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id, e.target.value)}
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
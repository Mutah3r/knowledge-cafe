import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = ({updateReadTime, updateBookmarkedBlogs}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[]);

    return (
        <div className='blogs-container'>
            {
                posts.map(post => <Blog post={post} handleReadTime={updateReadTime} updateBookmarkedBlogs={updateBookmarkedBlogs} key={post.id} />)
            }
        </div>
    );
};

export default Blogs;
import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainContent.css'


const MainContent = () => {
    const [readTime, setReadTime] = useState(0);
    const [bookmarkedBlogsNumber, setBookmarkedBlogsNumber] = useState(0);
    const [markedPosts, setMarkedPosts] = useState([]);

    const updateReadTime = addedTime => {
        setReadTime(readTime + addedTime);
    }

    const updateBookmarkedBlogs = (postId, postTitle) => {
        const isMarked = markedPosts.find(post => post.postId === postId);

        // search if already bookmarked or not
        if (isMarked) {
            toast.info('You Have Already Bookmarked This Blog!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // return;
        }

        const bookmarks = markedPosts;
        const newBookmark = { postId, postTitle };

        bookmarks.push(newBookmark);
        setMarkedPosts(bookmarks);

        setBookmarkedBlogsNumber(bookmarkedBlogsNumber + 1);
    }

    return (
        <>
            <div className='container'>
                <Blogs
                    updateReadTime={updateReadTime}
                    updateBookmarkedBlogs={updateBookmarkedBlogs}
                />
                <Sidebar
                    readTime={readTime}
                    bookmarkedBlogs={bookmarkedBlogsNumber}
                    markedPosts={markedPosts}
                />
                <ToastContainer />
            </div>
        </>
    );
};

export default MainContent;
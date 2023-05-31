import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './Booksmarks.css'

const Bookmarks = ({ bookmarkedBlogs, markedPosts }) => {
    return (
        <div className='bookmarks-container scroll'>
            <h1 className='bookmarks-number'>Bookmarked Blogs : {bookmarkedBlogs}</h1>

            {
                markedPosts.map((post, index) => {
                    return (<Bookmark title={post.postTitle} key={index} />)
                })
            }

            {/* <Bookmark /> */}
        </div>
    );
};

export default Bookmarks;
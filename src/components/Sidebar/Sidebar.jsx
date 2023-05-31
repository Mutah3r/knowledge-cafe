import React from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';
import ReadTime from '../ReadTime/ReadTime';
import './Sidebar.css'

const Sidebar = ({readTime, bookmarkedBlogs, markedPosts}) => {
    return (
        <div className='sidebar-container'>
            <ReadTime readTime={readTime}/>
            <Bookmarks 
                bookmarkedBlogs={bookmarkedBlogs} 
                markedPosts={markedPosts}
            />
        </div>
    );
};

export default Sidebar;<h1>This is sidebar container</h1>
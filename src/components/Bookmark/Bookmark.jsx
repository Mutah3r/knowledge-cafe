import React from 'react';
import './Bookmark.css'

const Bookmark = ({title}) => {
    return (
        <div className='bookmark'>
            <h1 className='bookmarked-post-title'>{title}</h1>
        </div>
    );
};

export default Bookmark;
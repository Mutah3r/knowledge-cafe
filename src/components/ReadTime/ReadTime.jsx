import React from 'react';
import './ReadTime.css'

const ReadTime = ({readTime}) => {
    return (
        <div className='read-time-container'>
            <h2 className="read-time">Spent time on read : {readTime} min</h2>
        </div>
    );
};

export default ReadTime;
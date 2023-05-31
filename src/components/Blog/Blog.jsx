import React, { useState } from 'react';
import './Blog.css'

const Blog = (props) => {
    const {id, title, cover_image, author_image, author_name, read_time, publish_date, tags} = props.post;
    const handleReadTime = props.handleReadTime;
    const updateBookmarkedBlogs = props.updateBookmarkedBlogs;

    const [isThisProductMarked,setIsThisProductMarked] = useState(false);

    return (
        <article className='blog-post-wrapper'>
            <div className="blog-cover-container">
                <img className='blog-cover' src={cover_image} alt="" />
            </div>

            <div className="blog-info">
                <div className="blog-author-info">  
                    <div className="blog-author-image-container">
                        <img src={author_image} alt="" />
                    </div>
                    <div className="blog-author-name-publish-date">
                        <h3 className="blog-author-name">{author_name}</h3>
                        <p className="blog-publish-date">{publish_date}</p>
                    </div>
                </div>
            
                <div className="read-time-bookmark-holder">
                    <p className="blog-read-time">{read_time} min read</p>
                    <span className="bookmark-icon-container">

                        <img onClick={()=>{
                            updateBookmarkedBlogs(id, title);
                            if(!isThisProductMarked){
                                setIsThisProductMarked(true)
                            }
                        }} src={isThisProductMarked? "./bookmark-solid.png" : "./bookmark.png"} alt="" />
                        
                    </span>
                </div>
            </div>
            
            <div className="blog-title-container">
                <h1>{title}</h1>
            </div>
            
            <div className="blog-tags">
                {
                    tags.map((tag, index) => {
                        return (<span className="blog-tag" key={index}>{tag}</span>)
                    })
                }
            </div>

            <div className="mark-read-container">
                <p onClick={()=>handleReadTime(read_time)}>Mark as read</p>
            </div>
        </article>
    );
};

export default Blog;
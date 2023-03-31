import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const {id, coverImage, authorImage, authorName, title, readingTime, publishDate } = props.blog;
    return (
        <div className='blog-data'>
            <img src={coverImage} alt="" />
            <h4>{authorName}</h4>
            {/* <img src={authorImage} alt="" /> */}
            <p className='pub-date'>{publishDate}</p>
            <h2 className='title'>{title}</h2>
            <p className='read-time'>{readingTime}</p>
        </div>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs-area'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className='cart-container'>
                <h4>Spent time on read : </h4>
            </div>

        </div>
    );
};

export default Blogs;
import React, { useEffect, useState } from 'react';
import BookmarkSide from '../BookmarkSide/BookmarkSide';
import Blog from '../Blog/Blog';
import './Blogs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogsData, setBlogsData] = useState([]);
    const [bookmarkSide, setBookmarkSide] = useState([]);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, []);

    const handleReadMore = (items) => {
        const newBookMark = [...bookmarkSide, items];
        setBookmarkSide(newBookMark);
    }

    const handleBookMark = (item) => {
        const index = blogs.findIndex((blog) => blog.id === item.id);
        if (index !== -1) {
            toast.success(`${item.title} has been bookmarked again!`);
            const newBookMark = [...blogs, item];
            setBlogs(newBookMark);

        } else {
            const newBookMark = [...blogs, item];
            setBlogs(newBookMark);
        }

    }

    return (
        <div className="container-fluid mt-4">
            <div class="row">
                <div className="col-12 col-md-8">
                    {
                        blogsData.map(blogInfo => <Blog blogInfo={blogInfo} handleReadMore={handleReadMore}
                            handleBookMark={handleBookMark}></Blog>)
                    }
                </div>
                <div className="col-12 col-md-4">
                    <BookmarkSide bookmarkSide={bookmarkSide} blogs={blogs} ></BookmarkSide>
                </div>
            </div>
        </div>

    );
};

export default Blogs;


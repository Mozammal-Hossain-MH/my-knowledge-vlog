import React, { useEffect, useState } from 'react';
import './BlogBody.css'
import Blog from '../Blog/Blog';

const BlogBody = () => {
    const [blogs, setBlogs] = useState([]);
    const [clickedBlog, setClickedBlog] = useState([]);
    const [markedAsRead, setMarkedAsRead] = useState([]);
    console.log(clickedBlog)

    let spentTime = 0;
    for (const blog of markedAsRead) {
        spentTime = spentTime + blog.time;
    }

    useEffect(() => {
        fetch('/vlogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])


    const addToBookmarks = (blog) => {
        const newClickedBlog = [...clickedBlog, blog];
        setClickedBlog(newClickedBlog);
    }

    const markAsRead = (blog) => {
        const newMarkedAsRead = [...markedAsRead, blog];
        setMarkedAsRead(newMarkedAsRead);
    }

    return (
        <div className='blog-page'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        addToBookmarks={addToBookmarks}
                        markAsRead={markAsRead}
                        key={blog.id}
                    ></Blog>)
                }
            </div>

            <div className='bookmarks'>
                <div className='spent-time'>
                    <p>Spent time on read : {spentTime} min</p>
                </div>
                <div className='bokmark-container'>
                    <div className='bookmarked-blogs'>
                        <h2>Bookmarked Blogs : {clickedBlog.length}</h2>
                    </div>
                    <div className='bookmarked-blog-title'>
                        {
                            clickedBlog.map(blog => <p key={blog.id}>{blog.blogTitle}</p>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BlogBody;
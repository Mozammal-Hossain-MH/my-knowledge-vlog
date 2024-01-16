import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    
    const { vlogImg, authorImg, author, time, blogLink, blogTitle, hashtag } = props.blog


    return (
        <div className='blog'>
            <img className='main-img' src={vlogImg} />
            <div className='author-details'>
                <div className='author'>
                    <img className='pfp-img' src={authorImg} />
                    <div className='author-name'>
                        <h2>{author}</h2>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{time} min read <span className='bookmark-btn' onClick={() => props.addToBookmarks(props.blog)}><FontAwesomeIcon icon={faBookmark} /></span></p>
                </div>
            </div>

            <a href={blogLink} className='blog-link'>{blogTitle}</a><br />
            <a href='#'>{hashtag}</a><br />
            <p className='mark-as-read'><a href="#" onClick={() => props.markAsRead(props.blog)}> <u>Mark as read</u></a></p>
            
        </div>
    );
};

export default Blog;
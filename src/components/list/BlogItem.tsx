import React from 'react';

// Types
import Blog from '../../models/blog';

// Project Import
import './blogItem.css';

// ==============================|| BLOG ITEM - INDIVIDUAL BLOG IN THE LIST  ||============================== //

const BlogItem = ({ blog }: { blog: Blog }) => {
    return (
        <div className="item">
            <div className="item__border"></div>
            <div className="item__content">
                <p className="item__content-author">
                    <span>Author: </span>
                    {blog.author}
                </p>
                <p className="item__content-des">
                    <span>Description: </span>
                    {blog.description}
                </p>
            </div>
        </div>
    );
};

export default BlogItem;

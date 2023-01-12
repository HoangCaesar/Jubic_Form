import { useState, useEffect } from 'react';

// Types
import Blog from '../../models/blog';

// Project Import
import { getData } from '../../utils/dataHandler';
import './list.css';

// Redux
import { useAppDispatch, useAppSelector } from '../../store';
import * as blogSelectors from '../../store/reducers/blog';

// ==============================|| LIST - A LISFT OF BLOGS   ||============================== //

const List = () => {
    // If its state changes, it means a new blog is added ---> reload our list
    const isNewItemAdded = useAppSelector(blogSelectors.selectBlogIsAdded);
    const [blogList, setBlogList] = useState<Blog[]>([]);

    useEffect(() => {
        const data = getData();
        // filter data to take a blog: {author, description, comment}
        const blogList = Object.values(data)
            .map((item) => JSON.parse(item))
            .filter((item) => item.author);
        setBlogList(blogList);
    }, [isNewItemAdded]);

    return (
        <div className="list">
            {blogList.map((item) => {
                return <li style={{ color: 'white' }}>{item.author}</li>;
            })}
        </div>
    );
};

export default List;

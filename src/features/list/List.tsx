import { useEffect, useRef, useState } from 'react';

// Types
import Blog from '../../models/blog';

// Project Import
import { getData } from '../../utils/dataHandler';
import { BlogItem } from '../../components';
import './list.css';

// Redux
import { useAppSelector } from '../../store';
import * as blogSelectors from '../../store/reducers/blog';

// ==============================|| LIST - A LISFT OF BLOGS   ||============================== //

const List = () => {
    // If its state changes, it means a new blog is added ---> reload our list
    const isNewItemAdded = useAppSelector(blogSelectors.selectBlogIsAdded);

    const [blogList, setBlogList] = useState<Blog[]>([]);
    const listRef = useRef<any>([]);

    useEffect(() => {
        const data = getData();
        // filter data to take a blog: {author, description, comment}
        const blogList = Object.values(data)
            .map((item) => JSON.parse(item))
            .filter((item) => item.author);
        setBlogList(blogList);
    }, [isNewItemAdded]);

    const onDragStartCircle = (e: any) => {
        for (const item of listRef.current) {
            const rect = item.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        }
    };

    return (
        <div className="list" onMouseMove={(e) => onDragStartCircle(e)}>
            {blogList.map((item, index) => {
                return (
                    <div
                        key={`${item.author}-${index}`}
                        ref={(el) => (listRef.current[index] = el)}
                    >
                        <BlogItem blog={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default List;

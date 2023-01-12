import { useEffect, useRef, useState, useCallback } from 'react';

// Types
import Blog from '../../models/blog';

// Project Import
import { getData, deleteData } from '../../utils/dataHandler';
import { BlogItem, ListModal } from '../../components';
import './list.css';

// Redux
import { useAppSelector, useAppDispatch } from '../../store';
import * as blogSelectors from '../../store/reducers/blog';
import * as blogActions from '../../store/reducers/blog';

// React-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| LIST - A LISFT OF BLOGS   ||============================== //

const List = () => {
    // If its state changes, it means a new blog is added ---> reload our list
    const dispatch = useAppDispatch();
    const isNewItemAdded = useAppSelector(blogSelectors.selectBlogIsAdded);
    const isItemDeleted = useAppSelector(blogSelectors.selectBlogIsDeleted);

    const listRef = useRef<any>([]);
    const [blogList, setBlogList] = useState<Blog[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<Blog>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const data = getData();
        // filter data to take a blog: {author, description, comment}
        const blogList = Object.values(data)
            .map((item) => JSON.parse(item))
            .filter((item) => item.author);
        setBlogList(blogList);
    }, [isNewItemAdded, isItemDeleted]);

    const handleMouseMove = (e: any) => {
        for (const item of listRef.current) {
            if (item) {
                const rect = item.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                item.style.setProperty('--mouse-x', `${x}px`);
                item.style.setProperty('--mouse-y', `${y}px`);
            }
        }
    };

    // For Modal
    const handleOpen = (item: Blog) => {
        setSelectedBlog(item);
        setOpen(true);
    };

    const handleClose = useCallback(() => setOpen(false), []);

    const handleDelete = useCallback((blog?: Blog) => {
        // Find the position of selected blog
        const data = getData();
        const valueList = Object.values(data);
        const keyList = Object.keys(data);
        const jsonBlog = JSON.stringify(blog);
        const indexOfBlog = valueList.indexOf(jsonBlog);
        const keyItem = keyList[indexOfBlog];
        // Delete Item
        deleteData(keyItem);
        dispatch(blogActions.itemIsDeleted());
        setOpen(false);
        toast.success('Delete successfully!');
    }, []);

    return (
        <>
            <div className="list" onMouseMove={(e) => handleMouseMove(e)}>
                {blogList.map((item, index) => {
                    return (
                        <div
                            key={`${item.author}-${index}`}
                            ref={(el) => (listRef.current[index] = el)}
                            onClick={() => handleOpen(item)}
                        >
                            <BlogItem blog={item} />
                        </div>
                    );
                })}
            </div>
            <ToastContainer />
            {open ? (
                <ListModal
                    isOpen={open}
                    blog={selectedBlog}
                    onClose={handleClose}
                    onDelete={handleDelete}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default List;

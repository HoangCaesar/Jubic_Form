import { createSlice } from '@reduxjs/toolkit';

// types
import Blog from '../../models/blog';

// initial state
interface BlogState {
    isAdded: Boolean;
    isDeleted: Boolean;
}

const initialState: BlogState = {
    isAdded: false,
    isDeleted: false,
};

// ==============================|| SLICE - BLOG ||============================== //

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        newItemIsAdded(state) {
            state.isAdded = !state.isAdded;
        },
        itemIsDeleted(state) {
            state.isDeleted = !state.isDeleted;
        },
    },
});

const selectBlogIsAdded = (state: any) => state.blog.isAdded;
const selectBlogIsDeleted = (state: any) => state.blog.isDeleted;

// selectors
export { selectBlogIsAdded, selectBlogIsDeleted };
// actions
export const { newItemIsAdded, itemIsDeleted } = blogSlice.actions;

export default blogSlice.reducer;

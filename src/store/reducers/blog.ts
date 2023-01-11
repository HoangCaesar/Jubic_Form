import { createSlice } from '@reduxjs/toolkit';

// types
import Blog from '../../models/blog';

// initial state
interface BlogState {
    isAdded: Boolean;
}

const initialState: BlogState = {
    isAdded: false,
};

// ==============================|| SLICE - BLOG ||============================== //

const Blog = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        newItemIsAdded(state) {
            state.isAdded = !state.isAdded;
        },
    },
});

const selectBlogIsAdded = (state: BlogState) => state.isAdded;

// selectors
export { selectBlogIsAdded };
// actions
export const { newItemIsAdded } = Blog.actions;

export default Blog.reducer;

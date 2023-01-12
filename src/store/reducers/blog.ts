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

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        newItemIsAdded(state) {
            state.isAdded = !state.isAdded;
        },
    },
});

const selectBlogIsAdded = (state: any) => state.blog.isAdded;

// selectors
export { selectBlogIsAdded };
// actions
export const { newItemIsAdded } = blogSlice.actions;

export default blogSlice.reducer;

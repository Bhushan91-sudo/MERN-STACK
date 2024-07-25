import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPosts, setPost } = postSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch(setPosts(res.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch(setPost(res.data));
  } catch (error) {
    console.error(error);
  }
};

export default postSlice.reducer;

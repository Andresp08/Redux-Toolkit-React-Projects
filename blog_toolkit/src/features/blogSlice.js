
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [
        {
            id: 1, 
            title: 'Top 10 programming languages', 
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            author: 'Jeremy jim'
        },
        {
            id: 2, 
            title: 'Top 10 vs code extensions', 
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            author: 'HouseCode'
        },
        {
            id: 3, 
            title: 'Python Vs code', 
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            author: 'Lama rechers'
        },
    ],
    reactions: 0
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state,action) => {
           state.blogs.push(action.payload)
        },
        editBlog: (state, action) => {
            const { id, title, content, author } = action.payload;
            const existingBlog = state.blogs.find( blog => blog.id == id );
            if(existingBlog){
                existingBlog.title = title,
                existingBlog.content = content,
                existingBlog.author = author
            }
        },
        deleteBlog: (state, action) => {
            const {id} = action.payload;
            console.log(id)
            const existingBlog = state.blogs.find( blog => blog.id == id );
            if(existingBlog){
                const nuevoState = state.blogs.filter(blog => blog.id !== id);
                state.blogs = nuevoState;
            }
        }
    },
});

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions
export default blogSlice.reducer
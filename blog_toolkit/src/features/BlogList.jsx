
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { deleteBlog } from './blogSlice';

const BlogList = () => {

    //useSelector
    const { blogs } = useSelector(state => state.blogs);

    console.log('blogs', blogs);

    const dispatch = useDispatch();

    const handleDeleteBlog = (id) => {
        dispatch( deleteBlog({id}));
    }

    const renderBlog = () => blogs.map(blog => (
        <div
            key={blog.id}
            className='bg-gray-300 p-5'
        >
            <div>
                <h1 className='font-bold text-lg text-gray-700 mb-3'>{blog.title}</h1>
                <p className='font-normal text-gray-600 mb-2 text-justify'>{blog.content}</p>
                <span className='font-bold text-gray-800'>by {blog.author} </span>

                <div className='flex items-center justify-evenly mt-4'>
                    <Link to={`edit-blog/${blog.id}`}>
                        <Button>edit</Button>
                    </Link>
                    <button 
                        className='bg-red-500 text-slate-900 font-bold py-2 px-6 rounded hover:bg-red-600 uppercase text-sm'
                        onClick={() => handleDeleteBlog(blog.id)}
                    >Delete</button>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="grid gap-5 md:grid-cols-2">
            {blogs.length ? renderBlog() : <p className='text-center col-span-2 text-gray-700 font-semibold'>No Blogs Yet!!</p>}
        </div>
    )
}

export default BlogList
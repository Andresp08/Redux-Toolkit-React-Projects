
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { editBlog } from './blogSlice';

const EditBlog = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const { blogs } = useSelector( state => state.blogs );
    const navigate = useNavigate();
    const existingBlog = blogs.filter(blog => blog.id == params.id)

    const { title, content, author } = existingBlog[0];

    const [values, setValues] = useState({
        title,
        content,
        author
    })

    const handleEditBlog = () => {
        setValues({ title: '', content: '', author: '' })
        dispatch( editBlog({
            id: params.id,
            title: values.title,
            content: values.content,
            author: values.author
        }))
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label='Title :'
                value={values.title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Your blog title here ' }}
            />
            <TextField
                label='Content :'
                value={values.content}
                onChange={(e) => setValues({ ...values, content: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Write your content here' }}
            />
            <TextField
                label='Author :'
                value={values.author}
                onChange={(e) => setValues({ ...values, author: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Write your content here' }}
            />
            <Button
                onClick={handleEditBlog}
            >
                Edit Post
            </Button>
        </div>
    )
}

export default EditBlog
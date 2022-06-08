
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from './blogSlice';

import TextField from '../components/TextField';
import Button from '../components/Button';

import { v4 as uuidv4 } from 'uuid';

const AddBlog = () => {

    const [values, setValues] = useState({
        title: '',
        content: '',
        author: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Add blog function
    const handleAddBlog = (e) => {
        e.preventDefault();

        setValues({ title: '', content: '', author: '' })

        dispatch(addBlog({
          id: uuidv4(),
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
                onClick={handleAddBlog}
            >
              Save Post
            </Button>
        </div>
    )
}

export default AddBlog

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../features/UserSlice';
import Button from './Button';

const UserList = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const handleRemoveUser = (id) => {
        dispatch( deleteUser({ id }))
    }

    const renderCard = () => users.map(user => (
        <div 
            key={user.id}
            className="bg-gray-300 p-5 flex items-center justify-between"
        >
            <div>
                <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
                <span className='font-normal text-gray-600'>{user.email}</span>
            </div>
            <div className='flex gap-4'>
                <Link to={`edit-user/${user.id}`}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </button>
                </Link>
                <button
                    onClick={() => handleRemoveUser(user.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    ))

    return (
        <div>
            <Link to="/add-user">
                <Button>Add User</Button>
            </Link>
            <div className='grid gap-5 md:grid-cols-2'>
            {users.length ? renderCard()  : <p className='text-center col-span-2 text-gray-700 font-semibold'>No users</p>}
            </div>
        </div>
    )
}

export default UserList
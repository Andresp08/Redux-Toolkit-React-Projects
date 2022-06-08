
import { useEffect } from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../store/slices/users'

const UserList = () => {

    //lanzar el action
    const dispatch = useDispatch();

    //acceder al estado a través del useSelector
    const { listUser } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <div className="container">
            <div className="row mb-5">
                { listUser.map(user => (
                    <div 
                        key={user.id}
                        className="col-md-3"
                    >
                        <div className="card mt-5">
                            <img src={user.avatar} alt={user.first_name} />
                            <div className="card-body">
                                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserList
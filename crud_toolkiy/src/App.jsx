
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'

function App() {

  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-5'>
      <h1 className='text-center font-bold text-4xl text-gray-700 pb-6'>Crud with Redux Toolkit</h1>

      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/edit-user/:id' element={<EditUser />}/>
      </Routes>
    </div>
  )
}

export default App

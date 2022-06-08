import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddBlog from './features/AddBlog'
import BlogList from './features/BlogList'
import EditBlog from './features/EditBlog'

function App() {
    return (

      <>
        <Header/>
        <div className='containet mx-auto px-2 max-w-5xl pt-10 md:pt-5'>
          <Routes>
            <Route path='/' element={ <BlogList /> }/>
            <Route path='/add-blog'  element={<AddBlog />} />
            <Route path='/edit-blog/:id'  element={<EditBlog />} />
          </Routes>
        </div>
      </>

    )
}

export default App

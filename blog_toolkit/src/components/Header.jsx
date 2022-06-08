
import { Link } from 'react-router-dom'
import Button from './Button'

const Header = () => {
    return (
        <header className='bg-slate-800 flex items-center justify-evenly'>
            <h1 className=' p-6 text-center font-bold text-4xl text-white pb-6'> Blog Redux Toolkit</h1>

            <Link to={"/"}>
                <Button className='bg-orange-400 p-3'>home</Button>
            </Link>
            <Link to={'/add-blog'}>
                <Button className='bg-orange-400 p-3'>post</Button>
            </Link>
        </header>
    )
}

export default Header
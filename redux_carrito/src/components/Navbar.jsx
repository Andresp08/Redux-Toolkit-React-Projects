
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector(state => state.cart);

  return (
    <div className='navbar'>
        <span className='logo'>Redux Store</span>
        <div className='rutas'>
            <Link className='navlink' to={'/'}>Home</Link>
            <Link className='navlink' to={'/cart'}>Cart</Link>

            <span className='cartCount'>
                Cart Items: {items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar
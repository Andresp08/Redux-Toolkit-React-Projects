
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/CartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleRemoveProduct = (id) => {
    console.log('id', id);
    dispatch( removeFromCart(id) );
  }

  return (
    <div className='productsWrapper'>
      {cartItems.map(item => (
        <div
          key={item.id}
          className="card"
        >
          <img className='img' src={item.image} alt={item.category} />
          <h4 className='title'>{item.title}</h4>
          <h5 className='price'>{item.price}</h5>
          <button
            className='btn'
            onClick={() => handleRemoveProduct(item.id)}
          >Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/CartSlice';
import { fetchProducts } from '../store/productSlice';

const Productos = () => {

    const dispatch = useDispatch();

    const {data: products, status} = useSelector( state => state.product)

    useEffect(() => {
        dispatch( fetchProducts() )
    }, [])

    const handleAddProduct = (product) => {
        dispatch( addToCart(product) )
    }

    return (
        status === 'loading' ? <p className='loading'>Loading Products...</p> : 
        status === 'error' ? <p className='error'>Something went wrong ...</p> : (
            <div className='productsWrapper'>
                {products.map(product => (
                    <div
                        key={product.id} 
                        className="card"
                    >
                        <img className='img' src={product.image} alt={product.category}/> 
                        <h4 className='title'>{product.title}</h4>   
                        <h5 className='price'>{product.price}</h5>   
                        <button 
                            className='btn'
                            onClick={() => handleAddProduct(product)}
                        >Add to cart</button>
                    </div>
                ))}
            </div>
        )
    )
}

export default Productos
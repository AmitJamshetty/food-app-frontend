import React from 'react'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import Payment from './Payment'

const Cart = () => {

    const itemsList = useSelector((store) => store.cart.items)
    const total = useSelector((store) => store.cart.total)
    // console.log('Cart Items: ', itemsList);
    // console.log('Cart Total: ', total);
    
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='m-4 p-4 text-center'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 mx-auto'>
            <button 
            onClick={handleClearCart}
            className='p-2 m-2 text-sm bg-black text-white rounded-lg'
            >
                Clear Cart
            </button>
            {
                itemsList.length === 0 && <h1>Cart is empty! Add items to your cart</h1>
            }
            <ItemList items={itemsList} />
            {total > 0 && <Payment />}
        </div>
    </div>
  )
}

export default Cart
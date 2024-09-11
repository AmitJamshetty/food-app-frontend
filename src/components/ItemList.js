import React, { useEffect } from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem, addTotal, removeItem } from '../utils/cartSlice'
import { useLocation } from 'react-router-dom';

const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
        // console.log("clicked " + itemId);
    }

    useEffect(() => {
        const total = items.reduce((acc, item) => {
            const itemPrice = item.card.info.price / 100 || item.card.info.defaultPrice / 100
            return acc + itemPrice
        }, 0)

        // console.log("Total inside ItemList:", total); // Verify the total is correct

        dispatch(addTotal(total))
    }, [items, dispatch])

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                        <div className='w-8/12'>
                            <div className='py-2'>
                                <span className='font-semibold'>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className='text-xs'>{item.card.info.description}</p>
                        </div>
                        <div className='rounded-lg'>
                            <div className='absolute my-20'>
                                <button
                                    // onClick={handleAddItem}
                                    // onClick={handleAddItem(item)}  find out the diff b/w these.
                                    onClick={() => handleAddItem(item)}
                                    className='px-6 py-1 mx-12 bg-white shadow-lg rounded-lg'
                                >Add +</button>
                            </div>
                                {location.pathname === '/cart' && (
                                    <div className='absolute mx-52 my-10'>
                                        <button
                                            onClick={() => handleRemoveItem(item.card.info.id)}
                                            className='px-6 py-1 bg-black text-white shadow-lg rounded-lg'
                                        >Remove -</button>
                                    </div>
                                )}
                            <img className='h-28 w-44' src={CDN_URL + item.card.info.imageId} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList
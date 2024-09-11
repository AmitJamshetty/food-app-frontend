import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div>
      {/* RestaurantCategory */}
      {/* Header */}
      <div className=' w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer' onClick={handleClick}>
        <div className='justify-between flex'>
          <span className='font-bold text-lg'>{data.card.card.title} ({data.card.card.itemCards.length})</span>
          <span>⬇️</span>
        </div>
        {
          showItems && <ItemList items={data.card.card.itemCards} />
        }
      </div>
      {/* Body */}
    </div>
  )
}

export default RestaurantCategory
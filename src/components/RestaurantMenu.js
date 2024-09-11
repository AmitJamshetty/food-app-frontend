import Shimmer from "../components/Shimmer"
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {

  const {resId} = useParams()
  const resInfo = useRestaurantMenu(resId) 
  const [showIndex, setShowIndex] = useState(null) // lifting state up

  // console.log(resInfo);

  if(resInfo === null)
    return <Shimmer/>

  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info
  // console.log(resInfo);
  
  const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
      c.card?.["card"]?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return(
    <div className='text-center'>
        <h1 className="text-2xl font-bold my-6">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
        {
          categories.map((category, index) => (
            // controlled component 
            <RestaurantCategory 
            key={category.card.card.title} 
            data={category}
            showItems = {index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            />
          ))
        }
    </div>
  )
}

export default RestaurantMenu
import {CDN_URL} from "../utils/constants" 
// for named exports we import it using {CDN_URL} else if it was a deafult export it would be imported as CDN_URL

const RestaurantCard = (props) => {
    const {resData} = props

    // console.log(resData);

    const { info:{name, cuisines, avgRating, costForTwo, sla: {deliveryTime}} } = resData

    // console.log(name, costForTwo, cuisines, avgRating, deliveryTime);

    return(
        <div className="m-4 p-4 w-[270px] h-[420px] bg-gray-50 hover:bg-gray-200 rounded-lg">
            <img className="w-60 h-36 rounded-lg shadow-[inset_0_-2px_4px_rgba(27,30,36,0)]" alt="res-food" src={CDN_URL + resData.info.cloudinaryImageId} />
            <h4 className="font-bold text-base py-3">{name}</h4>
            <h5 className="py-1">{cuisines.join(", ")}</h5>
            <h5 className="py-1">{costForTwo}</h5>
            <h5 className="py-1">{avgRating} stars</h5>
            <h5 className="py-1">{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard

export const flatDeal = (RestaurantCard) => {   // HOC is a pure function which takes input as a component and returns a component.
    return (props) => {
        // console.log(props);
        
        return(
            <div>
                    <h3 className="absolute font-extrabold text-white my-28 mx-8 px-2 text-[20px] [text-shadow:_2px_2px_30px_black]">
                        {props.resData.info.aggregatedDiscountInfoV3.header} {props.resData.info.aggregatedDiscountInfoV3.subHeader}
                    </h3>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
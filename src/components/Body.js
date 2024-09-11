import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { flatDeal } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [res, setRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const ResDeals = flatDeal(RestaurantCard);
    const { loggedInUser, setUserName } = useContext(UserContext)

    useEffect(() => {
        fetchData();
    }, []) // if no empty array, it will render every time

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json()

        console.log(jsonData);

        setRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setFilterRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    if (onlineStatus === false) {
        return <h1>Looks like NO INTERNET!!!</h1>
    }

    if (res.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="flex items-center">
                <div className="search p-4 m-4 ">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button
                        className="bg-green-100 px-4 py-2 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = res.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                            // console.log(filteredRestaurant);
                            setFilterRes(filteredRestaurant)
                        }}
                    >search</button>
                </div>
                <div className="">
                    <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = res.filter(restaurant => restaurant.info.avgRating > 4)
                        setFilterRes(filteredList) // As the state changes, react will automaticallly re-render the component
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input
                        className="border border-black p-2 m-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>

            <div className="flex flex-wrap">
                {
                    filterRes.map(restaurant => (
                        // console.log(restaurant);

                        <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>

                            {/* <RestaurantCard resData={restaurant}/> */}

                            {
                                restaurant.info.aggregatedDiscountInfoV3 ? (
                                    <ResDeals resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )
                            }
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body
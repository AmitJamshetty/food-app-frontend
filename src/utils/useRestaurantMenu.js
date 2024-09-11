import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
      }, [])
    
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId)
        const jsonData = await data.json()
        setResInfo(jsonData)
      } 

    return resInfo
}

export default useRestaurantMenu
import { useState,useEffect } from "react"
import { MENU_ITEM } from "./mockData"

const useRestaurantMenu = (resid) =>{
    const [menuItem,setMenuItem] = useState(null)

    useEffect(()=>{
        fetchMenuData()
    },[])
    async function fetchMenuData(){
        // console.log("api",MENU_ITEM+`${resid}&catalog_qa=undefined&submitAction=ENTER`);
        const apiResp = await fetch(MENU_ITEM+`${resid}&catalog_qa=undefined&submitAction=ENTER`)
        const dta = await apiResp.json()
        // console.log(dta?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name);
        setMenuItem(dta)
    }
    return menuItem
}
export default useRestaurantMenu
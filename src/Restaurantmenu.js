import Shammer from "./Shammer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu = () =>{
    const {resid} = useParams()
    //custom hook 
    const menuItem = useRestaurantMenu(resid)
    const restaurantName = menuItem?.data?.cards[0]?.card?.card?.info?.name;
    if(menuItem === null) return (<Shammer />)
    return (
        <div>
            <h1>{restaurantName}</h1>
            <h2>Menu</h2>
       <ul>
        {(menuItem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)?.map((elt)=>{
             key= elt?.card?.info?.id;
            return <li>{elt?.card?.info?.name}</li>
            }) || 'Biryani'
            } 
       </ul>
       </div>
    )
}
export default RestaurantMenu

JSON.stringify({
    tenantNumber: "abrar",
    emailAddress: "abrark@acquiscompliance.com",
    currentLocationOrigin:"localhost:8080"

})
import { Link } from "react-router-dom";
import { useState,useEffect } from "../node_modules/react";
import Restaurantcard,{PromotedRestaurantCard} from "./RestaurantCard";
import Shammer from "./Shammer";
import UseOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=>{
    const val = true
    const PromotedRestaurants = PromotedRestaurantCard(Restaurantcard)
    const onlineStatus = UseOnlineStatus();//show messege on getting offline (custom hook)
    const [restaurantList,setRestaurantList] = useState([]);//array destruction
    const [copyofrestaurantList,setcopyofRestaurantList] = useState([]);//array destruction

    const [searchText,setsearchText] = useState("");//array destruction

    useEffect(()=>{
        fetchData();
    })
    const fetchData = async ()=>{
        let mydata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.032944026491391&lng=77.59928874671459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let md = await mydata.json()
        setRestaurantList(md.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setcopyofRestaurantList(md.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    }
    if(onlineStatus == false) return (<div> <h1> looks like you are offline</h1></div>);

    return (restaurantList.length === 0) ? (<div><Shammer/><Shammer/><Shammer/><Shammer/></div>) :  (
        <div >
           <div className="flex justify-start m-4">
                    <input className="m-2 border-solid border border-black text-cyan-600" type="text" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="text-center m-2 border-solid border border-blue-500 text-white bg-blue-600 rounded-lg w-24" type="text" onClick={()=>{
                        let final_search_list = restaurantList.filter(e=>{
                            return e.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setcopyofRestaurantList(final_search_list)
                    }}> search </button>

                    <button className="m-2 border-solid border border-blue-500 text-white bg-blue-600 rounded-lg w-40" onClick={()=>{
                        const filteredRestaurents = restaurantList.filter(res=>{
                            return res.info.avgRating > 4.3
                        })
                        setRestaurantList(filteredRestaurents)
                    }}>toprated restaurant</button>
            
           </div>
                
        
        <div className='flex flex-wrap '>
        {
             
             copyofrestaurantList.map((elt,index) =>(
                val?
                <Link to = {"/restaurant/"+elt?.info?.id}>
                <Restaurantcard 
                key = {elt?.info?.id || index}
                resname = {elt?.info?.name||"unknown"}
                rating = {elt?.info?.avgRating||"0.0"}
                cousine ={elt?.info?.cuisines?.join(',')||"biryani"}
                time = {elt?.info?.costForTwo || "45"}
                cloudinaryImageId = {elt?.info?.cloudinaryImageId||"null"}

                />
                </Link> :<PromotedRestaurants/>
            ))
        }
        </div>
        
    </div>
    
   )
    
   
}

   export default Body;
import Shammer from "./Shammer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice"
const RestaurantMenu = () =>{
    const {resid} = useParams()
    const dispatch = useDispatch()
    const [isVisible,setIsVisible] = useState('')
    const [btnHideButton,setbtnHideButton] = useState('⬆️')
    const handleAddClick = (elt)=>{
        dispatch(addItem(elt))
    }
    //custom hook 
    const menuItem = useRestaurantMenu(resid)
    const restaurantName = menuItem?.data?.cards[0]?.card?.card?.info?.name;
    if(menuItem === null) return (<Shammer />)
    return (
        <div>
            <div className="border-t-slate-400  border-b-2 h-32 w-40 ml-[34rem]">
            <h1 className="font-bold  text-center" >{restaurantName}</h1>
            <p className="text-gray-500 font-light text-center">{menuItem?.data?.cards[0]?.card?.card?.info?.locality}</p>
            <p className="text-gray-500 font-light text-center">{menuItem?.data?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
           </div>
             <div className="border-t-2 mt-3 flex justify-between">
             <h1 className="font-extrabold ml-20 text-center" >{restaurantName}({menuItem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length+1})</h1>

             <button className="border-solid border w-11 border-slate-300 mr-24 mt-3 rounded-lg" onClick={()=>{
                isVisible == '' ? setIsVisible('hidden') : setIsVisible('');
                isVisible == '' ? setbtnHideButton('⬇️') : setbtnHideButton('⬆️');

           }}>{btnHideButton}</button>
             </div>
           <div className={` ${isVisible}`}>
           
          

            <ul >
                {(menuItem?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)?.map((elt)=>{
                    key= elt?.card?.info?.id;
                    return (
                    <li>
                        <div className="border-t-slate-400  border-b-2 h-32 justify-between flex m-9"  >
                            <div className="pl-7 m-6">
                                <h1 className="font-semibold">{elt?.card?.info?.name}</h1>
                                <h1 className="font-normal">₹{elt?.card?.info?.price? elt?.card?.info?.price/100: elt?.card?.info?.defaultPrice/100}</h1>
                                <p className="text-gray-500 font-light">{elt?.card?.info?.description}</p>
                                
                            </div>
                            <div className="border-solid border  h-32 border-slate-100 bg-gray-950 rounded-lg ">
                                <img className="h-16 w-[8rem]  mt-10" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + elt?.card?.info?.imageId}/>
                                <button className="border-solid border border-slate-300 rounded-sm text-green-400 h-6 w-16 bg-white font-semibold ml-8"
                                    onClick={()=>handleAddClick(elt)}
                                >ADD<span className="pb-6">+</span></button>

                            </div>

                        
                        </div>
                    </li>
                    )
                    }) || 'Biryani'
                } 
            </ul>
       </div>
        </div>
        
    )
}
export default RestaurantMenu
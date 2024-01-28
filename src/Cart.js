import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";



const Cart = ()=>{
    const dispatch = useDispatch()

    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div>
            <button className="bg-black text-white" onClick={()=>{
                dispatch(clearCart())
            }}> clearCart</button>
           { (cartItems?.length === 0) ? <h1>no items in the cart kindly add items <Link className="text-blue-400" to = "/">Home</Link></h1>
            :<ul >
                {cartItems?.map((elt)=>{
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
                                {/* <button className="border-solid border border-slate-300 rounded-sm text-green-400 h-6 w-16 bg-white font-semibold ml-8"
                                    onClick={()=>handleAddClick(elt)}
                                >ADD<span className="pb-6">+</span></button> */}

                            </div>

                        
                        </div>
                    </li>
                    )
                    }) || 'cartItems'
                } 
            </ul>}
        </div>
    )
}
export default Cart
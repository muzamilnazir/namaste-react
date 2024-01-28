import {  useState,useContext } from "react";
import {LOGO_URL} from "../utils/mockData";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import userContext from "./userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store)=>store.cart.items)
  const {loggedInUser} = useContext(userContext)
    const [btnname,setbtnname] = useState("login")
    const onlineStatus = UseOnlineStatus()
    return (
        
        <div className='rounded-lg bg-slate-100 flex items-stretch border-black border-2 justify-centre h-24 justify-between'>
            <img
            className=' bg-slate-100' 
            src = {LOGO_URL}/>
            <div className=" mt-5" >
                <ul className="flex items-stretch">
                    <li className="px-2 mr-2 font-bold">Online Status{ onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-2 mr-2 font-bold"><Link to = "/">Home</Link></li>
                    <li className="px-2 mr-2 font-bold"><Link to = "/about">About</Link></li>
                    <li className="px-2 mr-2 font-bold"><Link to = "/contact">Contact</Link></li>
                    <li className="px-2 mr-2 font-bold">{loggedInUser}</li>
                    <li className="px-2 mr-2 font-bold"><Link to = "/cart">Cart {cartItems.length}</Link></li>

                    <button className="font-bold px-2 mr-2 rounded-lg bg-cyan-500 text-white" onClick={()=>{
                       btnname == 'logout' ? setbtnname('login') : setbtnname('logout')
                      
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
   }
   export const HigherOrderComponent = ({ Header }) => {
    return (props) => {

      return (
        <div>
          <label>promoted</label>
          {Header && <Header />}
        </div>
      );
    };
  };
  
  
   export default Header;
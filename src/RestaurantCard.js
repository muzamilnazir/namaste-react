import {REST_URL} from "../utils/mockData"
const Restaurantcard = (props) =>{
    return (
        <div className=' border-slate-200 justify-evenly border m-3 rounded-lg w-44 h-[16rem]'>
            <div className=''>
                <img className='w-44 h-24 mb-2 rounded-lg' src={REST_URL + props.cloudinaryImageId} alt="Restaurant Image" />
                <h1 className='font-bold'>{props.resname}</h1>
                <h4 className='font-semibold'>{props.cousine.substring(0,18)+"..."}</h4>
                <h4 className='font-normal'>Rating: {props.rating}</h4>
                <h4 className=''>Delivery Time: {props.time} mins</h4>
            </div>
        </div>

    )
   }

  export const PromotedRestaurantCard = ()=>{
    return ()=>{
        return (
            <div>
                <label>Promoted</label>
                <Restaurantcard/>
            </div>
        )
    }
   }
   export default Restaurantcard;
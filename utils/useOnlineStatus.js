import { useState,useEffect } from "react"
const UseOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("online",() =>{
            setOnlineStatus(true)
        });
        window.addEventListener("offline",() =>{
            setOnlineStatus(false)
        })
    },[])
   
    return onlineStatus
}
export default UseOnlineStatus
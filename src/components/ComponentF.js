import React,{useContext}from "react";
import { ChannelContext, UseContext } from "../App";
function ComponentF(){
    const user =useContext(UseContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
            
           {user} and{channel}
           
        </div>
    )
}
export default ComponentF
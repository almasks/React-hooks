import React, { useContext } from "react";
import { CounterContex } from "../App";

function ComponentF(){
    const counterContex=useContext(CounterContex)
    return(
        <div>
            ComponentF-{counterContex.countState}
            <button onClick={()=>{counterContex.countDispatch("increment")}}>increment</button>
            <button onClick={()=>{counterContex.countDispatch("decrement")}}>decrement</button>
            <button onClick={()=>{counterContex.countDispatch("reset")}}>reset</button>

           
        </div>
    )
}
export default ComponentF
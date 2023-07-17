import React, { useContext } from "react";
import { CounterContex } from "../App";

function ComponentD(){
    const counterContex =useContext(CounterContex)
    return(
        <div>
            component D-{counterContex.countState}
            <button onClick={()=>{counterContex.countDispatch("increment")}}>increment</button>
            <button onClick={()=>{counterContex.countDispatch("decrement")}}>decrement</button>
            <button onClick={()=>{counterContex.countDispatch("reset")}}>reset</button>

        </div>
    )
}
export default ComponentD
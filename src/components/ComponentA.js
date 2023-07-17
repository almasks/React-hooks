import React, { useContext } from "react";
import { CounterContex } from "../App";
function ComponentA(){
    const counterContex = useContext(CounterContex)

    return(
        <div>
            ComponentA-{counterContex.countState}
            <button type="button"  onClick={()=>{counterContex.countDispatch("increment")}}>increment</button>
            <button type="button"  onClick={()=>{counterContex.countDispatch("decrement")}}>decrement</button>
            <button type="button"  onClick={()=>{counterContex.countDispatch("reset")}}>reset</button>

        </div>
    )
}
export default ComponentA
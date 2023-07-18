import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
function CountrOne(){
    const[count,increment,decrement,reset] =useCounter(0,1)
   
    return(
        <div>
            <div>count={count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}
export default CountrOne
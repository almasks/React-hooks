import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
function CountrTwo(){
    const[count,increment,decrement,reset] =useCounter(10,10)

   
    return(
        <div>
            <div>count={count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}
export default CountrTwo
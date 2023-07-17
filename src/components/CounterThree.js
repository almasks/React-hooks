import React,{useReducer} from "react";
const initialState =0
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
        return state+1;
        case 'decrement':
        return state-1;
        case 'reset':
        return initialState;
        default:
            return state
    }

}
function CounterThree(){
    const[count,dispatch]=useReducer(reducer,initialState)
    const[counterTwo,dispatchTwo]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>firstcount - {count}</h1>
            <button type="button" onClick={()=>dispatch('increment')}>increment</button>
            <button type="button" onClick={()=>dispatch('decrement')}>decrement</button>
            <button type="button"onClick={()=>dispatch('reset')}>reset</button>
            <h1>secondcount - {counterTwo}</h1>
            <button type="button" onClick={()=>dispatchTwo('increment')}>increment</button>
            <button type="button" onClick={()=>dispatchTwo('decrement')}>decrement</button>
            <button type="button"onClick={()=>dispatchTwo('reset')}>reset</button>

        </div>
    )
}
export default CounterThree
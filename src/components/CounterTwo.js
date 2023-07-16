import { useReducer } from "react";
import React from "react";
const initialState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter +action.value};
   
         case 'decrement':
            return {...state,firstCounter:state.firstCounter -action.value};
        case 'increment5':
            return {...state,firstCounter:state.firstCounter +action.value};
   
         case 'decrement5':
            return {...state,firstCounter:state.firstCounter -action.value};
            case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value};
   
         case 'decrement2':
            return {...state,secondCounter:state.secondCounter -action.value};
  
      
        case 'reset':
            return initialState;

    }
}
function CounterTwo(){
    const[count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h1>first Counter- {count.firstCounter}</h1>
            <h1>second counter-{count.secondCounter}</h1>
            <button type="button" onClick={()=>dispatch({type:"increment",value:1})} >increment</button>
            <button type="button" onClick={()=>dispatch({type:"decrement",value:1})} >decrement</button>
            <button type="button" onClick={()=>dispatch({type:"increment5",value:5})} >increment5</button>
            <button type="button" onClick={()=>dispatch({type:"decrement5",value:5})} >decrement5</button><br/>
            <button type="button" onClick={()=>dispatch({type:"increment2",value:1})} > increment counter 2</button>
            <button type="button" onClick={()=>dispatch({type:"decrement2",value:1})} >decrement counter 2</button><br/>

          
            <button type="button" onClick={()=>dispatch({type:"reset"})} >reset</button>

        </div>
    )
}
export default CounterTwo
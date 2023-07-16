import React,{useState} from 'react'
function HooksCounterTwo(){
    const initialState=0
    const [count,setCount] =useState(initialState)

const incre5=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount=>prevCount+1)
    }
}
    return (
        <div>
            Count :{count}
            <button onClick={()=>setCount(initialState)}>Reset </button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment </button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>decrement </button>
            <button onClick={incre5}>increment5 </button>

        </div>
    )
}
export default HooksCounterTwo
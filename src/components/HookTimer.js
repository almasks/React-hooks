import React,{useEffect, useRef, useState} from 'react'
function HooksTimer(){
    const [timer,setTimer] =useState(0)
    const intervelRef =useRef(null)

    useEffect(()=>{
         intervelRef.current=setInterval(()=>{
            setTimer(prevState=>prevState+1)
        },1000)
        return ()=>{
            clearInterval(intervelRef.current)
        }
    },[])

    return (
        <div>
            hooks timer -{timer}
            <button onClick={()=>clearInterval(intervelRef.current)}>clear hooks timer</button>
        </div>
    )
}
export default HooksTimer
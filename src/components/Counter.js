import React,{useMemo, useState} from 'react'
function Counter(){
    const [counterOne,setCounterOne] =useState(0)
    const[counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    let i=0;
    const isEven=useMemo(()=>{
        while(i<2000000)
        i++

        return counterOne%2===0
    },[counterOne])
    return (
        <div>
            <button onClick={incrementOne}>count-{counterOne}</button>
            <span>{isEven?'even':'odd'}</span>
            <br></br>
            <button onClick={incrementTwo}>count-{counterTwo}</button>


        </div>
    )
}
export default Counter
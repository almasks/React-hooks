import React,{useState,useEffect} from 'react'
function HooksMouse(){
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)
let logMousePosition =(e)=>{
    console.log("mouse move called")
    setX(e.clientX)
    setY(e.clientY)

}
useEffect(()=>{
    console.log("useEffect called")
    window.addEventListener("mousemove",logMousePosition)

    return ()=>{
        console.log("component unmounting code")
        window.removeEventListener('mousemove',logMousePosition)
    }
},[])
    return (
        <div>
<h1>
                Hooks x-{x} , y-{y}
    
</h1>        </div>
    )
}
export default HooksMouse
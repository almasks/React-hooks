import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function ParentComponent(){
    const [age,setAge] =useState(25)
const[salary,setSalary]=useState(55000)
const incrementAge =useCallback(()=>{
    setAge(age+1)
    },[age])
const incrementSalary =useCallback(()=>{
    setSalary(salary+5000)
    }
,[salary])
    return(
        <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>Increment age</Button>
        <Count text="Salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment salary</Button>
      
        </div>
    )
}
export default ParentComponent
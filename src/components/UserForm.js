import React, { useState } from "react";
import useInput from "./hooks/userInput";
function UserForm(){
    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bingdLastName,resetLastName]=useInput('')
    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return(
        <form onSubmit={submitHandler}>
           <div>
                <label>FirstName</label>
                <input type="text" {...bindFirstName}/>
           </div>
            <div>
                <label>LastName</label>
                <input type="text" {...bingdLastName}/>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}
export default UserForm
import axios from "axios";
import React, { useReducer, useState } from "react";
const initialState={
    loading:true,
    error:'',
    post:''
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                error:"",
                post:action.payload
            }
        case 'FETCH_FAILURE':
            return{
                loading:false,
                error:'something went wrong',
                post:{}
            }
        default:
            return state
    }
}
function DataFetchingThree(){
    const[state,dispatch]=useReducer(reducer,initialState)
    useState(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err=>{
            dispatch({type:'FETCH_FAILURE'})
        })
    })
    return(
        <div>
            {state.loading?'loading':state.post.title}
            {state.error?state.error:null}

        </div>
    )
}
export default DataFetchingThree
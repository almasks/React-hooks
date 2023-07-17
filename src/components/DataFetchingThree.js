import axios from "axios";
import React, { useEffect, useReducer } from "react";
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
    useEffect(()=>{
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
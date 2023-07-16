import React,{useEffect,useState}from "react";
import axios from "axios";
function DataFetchingTwo (){
    const [post,setPost] =useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    const handleChange=()=>{
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[idFromButtonClick])

    return(
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button" onClick={handleChange}>fetch post</button>
            <div>{post.title}</div>
        </div>
    )
}
export default DataFetchingTwo
import React, { useEffect, useState } from "react";
import { errorMessage } from "./shared";

export async function Fetchapi(url,options = {}){
        const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };
    try{
        const response = await fetch(url,defaultOptions)
        const data = await response.json()
        if(!response.ok){
            throw new Error(errorMessage(response.status))
        }

        return {
            data,
            status:response.status,
            error:''
        }
    }
    catch(e){
        return {
            data:[],
            status:0,
            error: e.message
        }
    }
}

export function Get(){
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const options = {
        method:'GET'
    }
    useEffect(()=>{
        const getall=async()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const {data,status,error}=await Fetchapi(url,options)
        console.log(error)
        if(status===200){
            setData(data)
        }
        else{
            setError(error)
        }
    }
    getall()
    },[])
    return (
        <div>
            {data.length>0 && (<PostTable posts = {data} />)}
            {error.length>0 && (
                <p style={{color:'red'}}>{error}</p>
            )}
        </div>
    )
}
export function getone(id){
    let data = {}
    let error = ''
    useEffect(()=>{
        const fetchone = async()=>{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const options = {
                method:'GET'
            }
            const res = Fetchapi(url,options)
            if(error){
                data = res.data
            }
            else{
                error = res.error
            }
        }
        fetchone()
    },[])
    return {error,data}
}

export function Fetchone() {
    const [id,setId] = useState()
    const handleClick=()=>{
        const {data,error} = getone(id)

    }

    return (
        <div>
            <input type="number" value={id} placeholder="Enter post id" onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch</button>
        </div>

    )

}

export function PostDetail({post}){
    return(
        <div>
            <p>UserId <b>{post.userId}</b></p>
            <p>Title <b>{post.title}</b></p>
            <p>Body <b>{post.body}</b></p>
        </div>
    )

}
export function PostTable({posts}){
    return (
        <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post)=>(
                            <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    )
}
import React, { useEffect, useState } from "react";
import { DisplayComments} from "../Services/get";
import { errorMessage } from "../shared";

export function Getall(){
    const [comments,setComments] = useState([])
    const [error,setError] = useState('')


    useEffect(()=>{
        const onerun=async()=>{            
            try {
                const url = 'https://jsonplaceholder.typicode.com/comments'
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(errorMessage(response.status))
                }
                if(response.status===200){
                    const data = await response.json()
                    setComments(data)
                }
            }
            catch (e){
                setError(e.message)
            }
        }
        onerun();
    },[])

    return(
        <div>
            {error?(
                <p style={{color:'red'}}>{error}</p>
            ):(<DisplayComments comments={comments}/>)}
        </div>
    )

}
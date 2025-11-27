import { useState } from "react"
import { Getall } from "./CRUD oprations/Fetchall"

export default function Menu(){
    const [httpmethod,setMethod] = useState('')

  return(
    <div>
      <select name="HTTPMenthod"value={httpmethod} onChange={(e)=>{setMethod(e.target.value)}} >
        <option value="" disabled></option>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      {httpmethod==='GET' && <Getall/>}

    </div>
  )
}
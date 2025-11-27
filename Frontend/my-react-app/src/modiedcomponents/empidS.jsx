import React, { useState } from "react";
import { DisplayEmployee } from "./CreateEmployee";

export function GetEmployeeById(){
    const [id,setId]=useState(null)
    const [emp,setEmployee]=useState({})
    const [error,setError]=useState('')

    const fetch=async(e)=>{
        try{
            // const req = await fetch()
            const req = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`)

            const res = await req.json()
            if (req.status===200){
                setEmployee(res)
                setError(null)
            }
            else if(req.status===404){
                setEmployee({})
                setError('Employee not found')
            }
        }
        catch(e){
            setError(e.message)
        }
    }
    return(
        <div>
            <input type="number" placeholder="Enter id"/>
            <button onClick={fetch}>Fetch</button>
            {emp && <DisplayEmployee emp={emp} />}
            {error && <p color="red">{error}</p>}
        </div>
    )
}
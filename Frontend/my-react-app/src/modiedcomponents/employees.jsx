import React, { useEffect, useState } from "react";

export function Getdata(){
    const [error,setError]= useState(null)
    const [emps,setEmployees]=useState([])

    const Getemployees=async()=>{
        try{
            const req = await fetch('http://127.0.0.1:8000/staff/employees/?ordering=id')
            const res = await req.json()
            if (req.status===200){
                setEmployees(res.results)
                setError(null)
            }
            else if(req.status===404){
                setError('Employees data not found ')
                setEmployees([])
            }
        }
        catch(e){
            setError(e.message)
            setEmployees([])
        } 
    }
    useEffect(()=>{
        Getemployees()
    },[])
    
    return(
    <div>
        {error && <p style={{color:'red'}}>{error}</p>}
        {emps.length!==0 && <>
            <h2>All the Employees List</h2>
            <table>
                <thead>
                    <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Designation</th><th>DeptId</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp=>(
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.dept}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>}
    </div>)
}
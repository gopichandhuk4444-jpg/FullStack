import React, { useEffect, useState } from "react";

function UpdateEmployee(){
    const [id,setId]=useState(null)
    const[emp,setEmployee]=useState(null)
    const [error,setError]=useState('')
    const fetchid=async(e)=>{
        try{
            e.preventDefault()
            const req = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`)
            const res = await req.json()
            if(req.status===200){
                setEmployee(res)
                setError(null)
            }
            else if(req.status===404){
                setError('Employee Id not found')
                setEmployee(null)
            }
            else {
                setEmployee(null)
                setError(req.status)
            }
        }
        catch(e){
            setEmployee(null)
            setError(e.message)
        }
    }
    const handleid=(e)=>{
        setId(e.target.value)
    }
    useEffect(()=>{
        fetchid()
    },[])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const req = await fetch(`http://127.0.0.1:8000/staff/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      });
      const res = await req.json()
      if (req.status===404){
        setError('Check the content carefully')
      }
    }
    return(
        <div>
        <h2>Update Employee</h2>

      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchEmployee}>Load Employee</button>
        {emp && <form onSubmit={handleSubmit}>
            <label >Dept</label>
            <input
            type="number"
            name="dept"
            placeholder="Department"
            value={emp.dept}
            onChange={handleChange}
            /><br />
            <label >Name</label>
            <input
            type="text"
            name="name"
            value={emp.name}
            placeholder="Name"
            onChange={handleChange}
            /><br />
            <label >Email</label>
            <input
            type="email"
            name="email"
            value={emp.email}
            placeholder="Email"
            onChange={handleChange}
            /><br />
            <label >Designation</label>
            <input
            type="text"
            name="designation"
            value={emp.designation}
            placeholder="Designation"
            onChange={handleChange}
            /><br />
            <button type="submit">Submit</button>
        </form>}
    </div>
    )

}
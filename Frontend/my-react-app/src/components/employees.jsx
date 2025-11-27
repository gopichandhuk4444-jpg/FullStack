import { useEffect, useState } from "react"

export function Getdata(){
    const [emps,setEmps]=useState([])
    const [error,seterror]=useState(null)
    const fetchall=async()=>{
        const url = 'http://127.0.0.1:8000/staff/employees/?ordering=id'
        try{

        const result = await fetch(url)
        if (!result.ok){
            throw new Error(`Error ${result.status}`);
        }
        const data = await result.json();
        // console.log("API response:", data);
        setEmps(data.results);
    }
    catch(e){
        seterror(e.message)
    }
    }
    useEffect(()=>{
        fetchall()
    },[])
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
    if (!emps||emps.length === 0) return <p>Loading...</p>;
    return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Designation</th><th>DeptId</th>
        </tr>
      </thead>
      <tbody>
        {emps.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.designation}</td>
            <td>{emp.dept}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// import React, { useEffect, useState } from "react";
// import { DisplayEmployee } from "./CreateEmployee";

// export function GetEmployeeById(){
//     const [id,setId]=useState(null)
//     const[emp,setEmployee]=useState(null)
//     const [error,setError]=useState('')
//     const fetchid=async(e)=>{
//         try{
//             e.preventDefault()
//             const req = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`)
//             const res = await req.json()
//             if(req.status===200){
//                 setEmployee(res)
//                 setError(null)
//             }
//             else if(req.status===404){
//                 setError('Employee Id not found')
//                 setEmployee(null)
//             }
//             else {
//                 setEmployee(null)
//                 setError(req.status)
//             }
//         }
//         catch(e){
//             setEmployee(null)
//             setError(e.message)
//         }
//     }
//     const handleid=(e)=>{
//         setId(e.target.value)
//     }

//     return(
//         <div>
//             <form >
//                 <input type="number"placeholder="Employee Id"  onChange={handleid} />
//                 <button onClick={fetchid}>Fetch</button>
//             </form>
//             {error && <p style={{color: "red"}} >{error}</p>}
//             {emp && <DisplayEmployee emp={emp}/>}
//         </div>
//     )
// }

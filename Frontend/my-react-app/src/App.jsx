import { useState } from "react"
// import { Getdata } from "./components/employees"
import { Getdata } from "./modiedcomponents/employees"
import { CreateEmployee } from "./modiedcomponents/CreateEmployee"
// import { CreateEmployee } from "./components/createEmployee"
// import { GetEmployeeById } from "./modiedcomponents/empid"
// import { GetEmployeeById } from "./components/empid"
import { DeleteEmployee } from "./components/delete"
import { UpdateEmployee } from "./components/update"
import { GetEmployeeById } from "./modiedcomponents/empidS"
function App() {
  const [mode,setMode]=useState(null)
  return(
    <div>
      <h1>Employees management</h1>

      {/* Buttons perform actions */}
      <button onClick={()=>setMode('home')}>Home</button>
      <button onClick={()=>setMode('allemps')}>Get by all Employees</button>
      <button onClick={()=>setMode('postemp')}>Create Employee</button>
      <button onClick={()=>setMode('empid')}>Get By ID</button>
      <button onClick={()=>setMode('upid')}>Update By ID</button>
      <button onClick={()=>setMode('delid')}>delete By ID</button>


      <hr />
      {mode==='allemps'&&<Getdata/>}
      {mode==='postemp'&&<CreateEmployee/>}
      {mode==='empid'&&<GetEmployeeById/>}
      {mode==='upid'&&<UpdateEmployee/>}
      {mode==='delid'&&<DeleteEmployee/>}
    </div>
    // <h1>Hi</h1>
  )

}

export default App

import React ,{ useState } from "react";

export function GetEmployeeById() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  const fetchEmployee = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`);
      if (!res.ok) throw new Error(`Employee ${id} not found`);
      const data = await res.json();
      setEmployee(data);
      setError(null);
    } catch (err) {
      setEmployee(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Get Employee by ID</h2>
      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchEmployee}>Fetch</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employee && (
        <div style={{ marginTop: "1rem" }}>
          <p><b>ID:</b> {employee.id}</p>
          <p><b>Name:</b> {employee.name}</p>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Dept:</b> {employee.dept}</p>
          <p><b>Designation:</b> {employee.designation}</p>
        </div>
      )}
    </div>
  );
}

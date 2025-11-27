import { useState } from "react";
import React from "react";

export function CreateEmployee() {
  const [emp, setEmployee] = useState({
    dept: 0,
    name: "",
    email: "",
    designation: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setEmployee({ ...emp, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("http://127.0.0.1:8000/staff/employees/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp),
      });

      const res = await req.json();
      setEmployee(res);
      if (req.status === 201) {
        setEmployee(res);
      } else if (req.status === 400) {
        setError("Invalid credentials");
      }
    } catch (e) {
      setError(`Error ${e.message}`);
    }
  };
  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="dept"
          placeholder="Department"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {emp.id && <DisplayEmployee emp={emp} />}
    </div>
  );
}

export function DisplayEmployee({ emp }) {
  return (
    <div style={{ marginTop: "1rem", color: "green" }}>
      <p>
        <b>ID:</b> {emp.id}
      </p>
      <p>
        <b>Name:</b> {emp.name}
      </p>
      <p>
        <b>Email:</b> {emp.email}
      </p>
      <p>
        <b>Dept:</b> {emp.dept}
      </p>
      <p>
        <b>Designation:</b> {emp.designation}
      </p>
    </div>
  );
}

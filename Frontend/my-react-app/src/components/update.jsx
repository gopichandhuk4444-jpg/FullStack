import { useState } from "react";

export function UpdateEmployee() {
  const [id, setId] = useState("");
  const [form, setForm] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const fetchEmployee = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`);
      if (!res.ok) throw new Error(`Employee ${id} not found`);
      const data = await res.json();
      setForm(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setForm(null);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const updated = await res.json();
      setMessage(` Employee ${updated.id} updated successfully`);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>

      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fetchEmployee}>Load Employee</button>

      {form && (
        <form onSubmit={handleUpdate} style={{ marginTop: "1rem" }}>
          <input
            type="number"
            name="dept"
            placeholder="Department"
            value={form.dept}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
          />
          <button type="submit">Update</button>
        </form>
      )}

      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

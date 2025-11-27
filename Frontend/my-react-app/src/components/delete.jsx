import { useState } from "react";

export function DeleteEmployee() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!id) {
      setError("Please enter an ID");
      return;
    }

    // Confirm before deleting
    if (!window.confirm(`Are you sure you want to delete employee ${id}?`)) {
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/staff/employees/${id}/`, {
        method: "DELETE",
      });

      if (res.status === 204) {
        setMessage(` Employee ${id} deleted successfully`);
        setError(null);
      } else if (res.status === 404) {
        throw new Error(`Employee ${id} not found`);
      } else {
        throw new Error(`Error ${res.status}`);
      }
    } catch (err) {
      setError(err.message);
      setMessage(null);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <input
        type="number"
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>

      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

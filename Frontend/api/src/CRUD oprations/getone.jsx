import React, { useState } from "react";
import { errorMessage } from "../shared";

export function Getone() {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");
  const [msg, setMessage] = useState(null);

    const fun = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}/`
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setUser(data);
        }
        setMessage(errorMessage(response.status));
      } catch (e) {
        setMessage(e.message);
      }
    };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter userid"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={fun}>Fetch</button>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
      {user.name && (
        <>
          <p>
            Name: <b>{user.name}</b>
          </p>
          <p>
            email: <b>{user.email}</b>
          </p>
          <p>
            Mobile: <b>{user.phone}</b>
          </p>
        </>
      )}
    </div>
  );
}

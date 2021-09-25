import React, { useState } from "react";

export default function AuthenticationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = e => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
        type="text"
        placeholder="First Name"
        required
      />
      <input 
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        type="text"
        placeholder="Last Name"
        required
      />
      <button>Submit</button>
    </form>
  );
}
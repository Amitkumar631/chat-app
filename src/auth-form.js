import React, { useState } from "react";

export default function AuthenticationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = e => {
    fetch('http://localhost:4000', {
      method: 'POST',
      body: JSON.stringify({ firstName }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => { console.log('Success:', data); })
      .catch((error) => {
        console.error('Error: ', error);
      });
    e.preventDefault()
  }

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
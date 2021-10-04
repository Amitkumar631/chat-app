import React, { useState } from "react";
import axios from "axios";

export default function AuthenticationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState(null);

  const submit = e => {
    e.preventDefault();
    axios
      .post('/send', { firstName, lastName })
      .then(response => {
        setResult(response.data);
        setFirstName("");
        setLastName("");
      })
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later' });
      });
    console.log('Success');
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
      <button type="submit">Submit</button>
    </form>
  );
}
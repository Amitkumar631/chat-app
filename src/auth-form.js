import React, { useState } from "react";
import axios from "axios";

export default function AuthenticationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [result, setResult] = useState(null);

  const submit = e => {
    e.preventDefault();
    axios
      .post('/send', { firstName, lastName, dateOfBirth})
      .then(response => {
        setResult(response.data);
        setFirstName("");
        setLastName("");
        setDateOfBirth("");
      })
      .catch(() => {
        setResult({ success: false, message: 'Something went wrong. Try again later' });
      });
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
      <input 
        value={dateOfBirth}
        onChange={event => setDateOfBirth(event.target.value)}
        type="date"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
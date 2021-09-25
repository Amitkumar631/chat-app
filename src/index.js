import React from "react";
import ReactDOM from "react-dom";
import AuthenticationForm from "../src/auth-form.js";

ReactDOM.hydrate(
  <AuthenticationForm />,
  document.getElementById("root")
);

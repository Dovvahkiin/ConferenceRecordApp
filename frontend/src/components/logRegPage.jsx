import React from "react";
import "../styles/logreg.css";
import FormLogin from "./forms/FormLogin";
import FormRegister from "./forms/FormRegister";

function LoginPage() {
  return (
    <div class="logCont">
      <FormLogin />
    </div>
  );
}
function RegisterPage() {
  return (
    <div>
      <div class="logCont">
        <FormRegister />
      </div>
    </div>
  );
}
export { LoginPage, RegisterPage };

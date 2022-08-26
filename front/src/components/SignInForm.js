import React from "react";

function SignInForm() {
  return (
    <form action="/SignIn" method="post">
      <label for="username">username</label>
      <input type="text" id="username" name="username"></input>
      <label for="password">password</label>
      <input type="text" id="password" name="password"></input>
      <button>Sign In</button>
    </form>
  );
}

export default SignInForm;

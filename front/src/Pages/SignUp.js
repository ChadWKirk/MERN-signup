import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <form action="/SignedUp" method="post">
          <label for="username">username</label>
          <input type="text" id="username" name="username"></input>
          <label for="password">password</label>
          <input type="text" id="password" name="password"></input>
          <label for="email">email</label>
          <input type="text" id="email" name="email"></input>
          <button type='submit'>Sign Up</button>
        </form>
      </div>

      <div>
        <h3>Already have an account?</h3>
        <a href="/Signin">Sign In</a>
      </div>
    </div>
  );
}
export default SignUp;

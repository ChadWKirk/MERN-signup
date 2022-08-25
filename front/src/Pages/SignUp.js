import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <form>
          <label>username</label>
          <input></input>
          <label>password</label>
          <input></input>
          <label>email</label>
          <input></input>
          <button>Sign Up</button>
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

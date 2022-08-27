import React from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });

  async function onSubmit(e) {
    const newUser = { ...form };

    await fetch("http://localhost:5000/SignUp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", password: "", email: "" });
  }

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label for="username">username</label>
          <input type="text" id="username" name="username"></input>
          <label for="password">password</label>
          <input type="text" id="password" name="password"></input>
          <label for="email">email</label>
          <input type="text" id="email" name="email"></input>
          <button type="submit">Sign Up</button>
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

import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";

function App() {
  return (
    <BrowserRouter>
      <h1>Signer Upper</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<SignIn />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/Account" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

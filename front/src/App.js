import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Signin" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

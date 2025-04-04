import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login /Login"
import SignupPage from "./Components/Signup/SignupPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import NewPassword from "./Components/NewPassword/NewPassword"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;

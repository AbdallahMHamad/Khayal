import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/HomePage";
import ForgotPasswordPage from "./pages/forgetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgetPassword" element={<ForgotPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;

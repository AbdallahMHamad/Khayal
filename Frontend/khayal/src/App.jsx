import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Examples from "./components/Examples";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/forgetPassword";

import { useState } from "react";

import "./index.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Examples />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;


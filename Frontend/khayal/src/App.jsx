import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Examples from "./components/Examples/Examples";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
// import Footer from "./components/ Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/layout/layout";
import ForgotPassword from "./components/forgetPassword";

function HomePage() {
  return (
    <div className="global-bg min-h-screen text-white">
      <Layout>
        <main className="pt-24">
          <Hero />
          <Features />
          <Examples />
          <Pricing />
          <FAQ />
        </main>
      </Layout>
    </div>
  );
}
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;

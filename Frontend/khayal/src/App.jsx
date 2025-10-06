import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Examples from "./components/Examples";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Examples />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

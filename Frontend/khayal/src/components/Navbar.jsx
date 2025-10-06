import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 navbar-blur ${
        scrolled ? "navbar-small" : ""
      }`}
    >
      <h1 className="text-2xl font-bold text-blue-400">Enhancor</h1>
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li>
          <a href="#features" className="hover:text-blue-400">
            Features
          </a>
        </li>
        <li>
          <a href="#examples" className="hover:text-blue-400">
            Examples
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-blue-400">
            Pricing
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-blue-400">
            FAQ
          </a>
        </li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
        Sign In
      </button>
    </nav>
  );
}

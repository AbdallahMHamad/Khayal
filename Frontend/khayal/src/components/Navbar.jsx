import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="text-5xl font-bold text-blue-400">
        Khayal
      </Link>

      {/* Menu */}
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

      {/* Language Switcher + Login */}
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-gray-800/60 backdrop-blur-md rounded-full p-1 border border-gray-700">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
              i18n.language === "en"
                ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("ar")}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
              i18n.language === "ar"
                ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            AR
          </button>
        </div>

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const rtl = i18n.language === "ar";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to top when logo is clicked
  const handleLogoClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on homepage, just scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home, then scroll to top
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      } ${rtl ? "direction-rtl" : ""}`}
    >
      {/* ✅ Logo (scrolls to top) */}
      <a
        href="/"
        onClick={handleLogoClick}
        className="text-5xl font-bold text-blue-400 cursor-pointer"
      >
        {t("navbar.logo")}
      </a>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-xl font-medium">
        <li>
          <a href="#features" className="hover:text-blue-400">
            {t("navbar.features")}
          </a>
        </li>
        <li>
          <a href="#examples" className="hover:text-blue-400">
            {t("navbar.examples")}
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-blue-400">
            {t("navbar.pricing")}
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-blue-400">
            {t("navbar.faq")}
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
            {t("navbar.english")}
          </button>
          <button
            onClick={() => i18n.changeLanguage("ar")}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
              i18n.language === "ar"
                ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("navbar.arabic")}
          </button>
        </div>

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          {t("navbar.login")}
        </Link>
      </div>
    </nav>
  );
}

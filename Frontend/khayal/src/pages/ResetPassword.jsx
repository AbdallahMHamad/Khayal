import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "../services/authService";
import { useTranslation } from "react-i18next";

export default function ResetPassword() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage(t("resetPassword.mismatch"));
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword(email, newPassword);
      setMessage(response.data.message || t("resetPassword.success"));
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error resetting password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Logo */}
      <div className="absolute top-10 left-10 z-30">
        <a href="/" className="text-5xl font-bold text-purple-400">
          Khayal
        </a>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black animate-gradient-xy">
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `twinkle ${
                  Math.random() * 80 + 2
                }s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-2xl border border-purple-500/30 backdrop-blur-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.104.896-2 2-2h6a2 2 0 012 2v8a2 2 0 01-2 2H14a2 2 0 01-2-2v-8zM4 11h4m-2-2v2m2 0v2m-2 2h2"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">
            {t("resetPassword.title")}
          </h1>
          <p className="text-gray-300 mt-2 text-sm">
            {t("resetPassword.subtitle")}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="inputbox">
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span>{t("resetPassword.newPassword")}</span>
            <i></i>
          </div>

          <div className="inputbox">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span>{t("resetPassword.confirmPassword")}</span>
            <i></i>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 transition-colors py-3 rounded-lg font-semibold text-white shadow-md"
          >
            {loading ? t("resetPassword.loading") : t("resetPassword.btn")}
          </button>
        </form>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes twinkle { 0% {opacity:0.3;} 100% {opacity:1;} }
        @keyframes gradient-xy { 0% {background-position:0% 50%;} 50% {background-position:100% 50%;} 100% {background-position:0% 50%;} }
        .animate-gradient-xy { background-size: 200% 200%; animation: gradient-xy 15s ease infinite; }

        .inputbox {
          position: relative;
          width: 100%;
        }
        .inputbox input {
          position: relative;
          width: 100%;
          padding: 20px 10px 10px;
          background: transparent;
          outline: none;
          border: none;
          color: #fff;
          font-size: 1em;
          letter-spacing: 0.05em;
          z-index: 10;
        }
        .inputbox span {
          position: absolute;
          left: 10px;
          top: 10px;
          padding: 10px;
          font-size: 1em;
          color: #b0a8d9;
          letter-spacing: 0.05em;
          transition: 0.5s;
          pointer-events: none;
        }
        .inputbox input:valid ~ span,
        .inputbox input:focus ~ span {
          color: #a78bfa;
          transform: translateX(-8px) translateY(-32px);
          font-size: 0.8em;
          letter-spacing: 0.1em;
        }
        .inputbox i {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
          border-radius: 4px;
          transition: 0.5s;
          pointer-events: none;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
          z-index: 9;
        }
        .inputbox input:valid ~ i,
        .inputbox input:focus ~ i {
          height: 44px;
          box-shadow: 0 0 15px rgba(167, 139, 250, 0.8);
        }
      `}</style>

      {/* Message */}
      {message && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in-out z-50">
          {message}
        </div>
      )}
    </div>
  );
}

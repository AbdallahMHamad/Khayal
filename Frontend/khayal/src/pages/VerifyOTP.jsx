import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOTP, sendOTP } from "../services/authService";
import { useTranslation } from "react-i18next";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const stateEmail = location.state?.email;
    if (stateEmail) {
      setEmail(stateEmail);
    } else {
      navigate("/forgetPassword");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await verifyOTP(email, otp);
      setMessage(response.data.message || t("verify.success"));
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || t("verify.error"));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    setResending(true);
    setMessage("");
    try {
      await sendOTP(email);
      setMessage(t("verify.resent"));
      setTimer(60);
    } catch {
      setMessage(t("verify.resendError"));
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Logo */}
      <div className="absolute top-10 left-10 z-30">
        <a href="/" className="text-5xl font-bold text-purple-400">
          {t("navbar.logo")}
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
          <h1 className="text-3xl font-bold text-white">{t("verify.title")}</h1>
          <p className="text-gray-300 mt-2 text-sm">
            {t("verify.subtitle")}{" "}
            <span className="text-blue-400">{email}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="inputbox">
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <span>{t("verify.placeholder")}</span>
            <i></i>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 transition-colors py-3 rounded-lg font-semibold text-white shadow-md"
          >
            {loading ? t("verify.loading") : t("verify.btn")}
          </button>
        </form>

        {/* Resend Button */}
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleResend}
            disabled={timer > 0 || resending}
            className="text-blue-400 hover:text-blue-200 transition-colors"
          >
            {resending
              ? t("verify.resending")
              : timer > 0
              ? `${t("verify.resendIn")} ${timer}s`
              : t("verify.resend")}
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          {t("verify.backMsg")}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-300 hover:text-blue-100 cursor-pointer transition-colors"
          >
            {t("verify.back")}
          </span>
        </p>
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

      {/* Message Toast */}
      {message && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in-out z-50">
          {message}
        </div>
      )}
    </div>
  );
}

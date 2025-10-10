import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, sendOTP, verifyOTP } from "../services/authService";
import { useTranslation } from "react-i18next";

export default function Signup() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  // Step 1: Register User
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await registerUser(name, email, password);
      setMessage(res?.data?.message || t("signup.signupSuccess"));
      setShowOTP(true);
      await sendOTP(email);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || t("signup.signupFailed"));
      setName("");
      setPassword("");
      // نترك البريد الإلكتروني ليبقى
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (!/^\d{6}$/.test(otp)) {
        setMessage(t("signup.otpInvalid"));
        setLoading(false);
        return;
      }

      const res = await verifyOTP(email, otp);
      setMessage(res?.data?.message || t("signup.otpSuccess"));
      setShowOTP(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || t("signup.otpFailed"));
      setOTP(""); // مسح حقل OTP بعد الفشل
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setMessage("");
    setLoading(true);
    try {
      const res = await sendOTP(email);
      setMessage(res?.data?.message || t("signup.resendOtp"));
    } catch (err) {
      console.error(err);
      setMessage(t("signup.resendOtpFailed"));
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

      {/* Galaxy Background */}
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
                  Math.random() * 8 + 2
                }s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Form */}
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">{t("signup.title")}</h1>
          <p className="text-gray-300 mt-2 text-sm">{t("signup.subtitle")}</p>
        </div>

        {!showOTP && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="inputbox">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder={t("signup.fullName")}
              />
              <span>{t("signup.fullName")}</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t("signup.email")}
              />
              <span>{t("signup.email")}</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t("signup.password")}
              />
              <span>{t("signup.password")}</span>
              <i></i>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 hover:bg-purple-600 transition-colors py-3 rounded-lg mt-2 font-semibold text-white shadow-md"
            >
              {loading ? t("signup.creating") : t("signup.signupBtn")}
            </button>
          </form>
        )}

        {showOTP && (
          <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4 mt-4">
            <div className="inputbox">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                required
                placeholder={t("signup.otp")}
              />
              <span>{t("signup.otp")}</span>
              <i></i>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 hover:bg-purple-600 transition-colors py-3 rounded-lg mt-2 font-semibold text-white shadow-md"
            >
              {loading ? t("signup.verifying") : t("signup.verifyBtn")}
            </button>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={loading}
              className="text-sm text-blue-400 mt-2"
            >
              {t("signup.resendOtp")}
            </button>
          </form>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">
          {t("signup.alreadyAccount")}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-300 hover:text-blue-100 cursor-pointer transition-colors"
          >
            {t("signup.login")}
          </span>
        </p>
      </div>

      {message && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium animate-fade-in-out z-50">
          {message}
        </div>
      )}

      <style>{`
        .inputbox {
  position: relative;
  width: 100%;
}

.inputbox input {
  width: 100%;
  padding: 18px 10px 10px; /* قلل padding-top لتجنب تداخل النص */
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
  top: 18px; /* عدّل هذا لتناسب padding الجديد */
  padding: 0;
  font-size: 1em;
  color: #b0a8d9;
  letter-spacing: 0.05em;
  transition: 0.3s;
  pointer-events: none;
}

.inputbox input:focus ~ span,
.inputbox input:valid ~ span {
  color: #a78bfa;
  transform: translateX(-8px) translateY(-28px); /* عدّل Y لتتناسب مع top الجديد */
  font-size: 0.8em;
  letter-spacing: 0.1em;
}

.inputbox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,#8b5cf6,#3b82f6,#8b5cf6);
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  box-shadow: 0 0 10px rgba(139,92,246,0.6);
  z-index: 9;
}

.inputbox input:focus ~ i,
.inputbox input:valid ~ i {
  height: 44px;
  box-shadow: 0 0 15px rgba(167,139,250,0.8);
}
  `}</style>
    </div>
  );
}

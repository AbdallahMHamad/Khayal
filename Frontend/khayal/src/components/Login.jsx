import React from "react";

export default function Login() {
  return (
    
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Galaxy Background */}
      <div className="absolute top-10 left-10 z-30">
  <a href="/"  className="text-2xl font-bold text-blue-400">
    Khayal
  </a>
</div>
      <div className="absolute inset-0 bg-gradient-to-br from-Black-900 via-blue-900 to-black animate-gradient-xy">
        {/* Stars */}
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
                animation: `twinkle ${Math.random() * 80 + 2}s infinite alternate`,
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-300 mt-2 text-sm">
            Sign in to explore the universe of possibilities
          </p>
        </div>

        <a href="/" className="w-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors py-2 rounded-lg flex items-center justify-center gap-2 mb-4 border border-purple-400/50">
          <img style={{width: "20px", height: "20px" , borderRadius: "47%"}}
src="https://s.yimg.com/fz/api/res/1.2/I2ucT7v2aEn9pInvuzBnPQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/e76fa261-e45b-3514-872d-e8fa3a2473e5/t_500x300"            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </a>

        <div className="text-center text-gray-400 text-xs mb-4">
          OR CONTINUE WITH EMAIL
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="p-3 rounded-lg bg-[#1f1b2e] border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="********"
            className="p-3 rounded-lg bg-[#1f1b2e] border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400"
          />

          <div className="text-right text-sm text-blue-300 hover:text-blue-100 cursor-pointer">
            Forgot password?
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 transition-colors py-3 rounded-lg mt-2 font-semibold text-white shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <span className="text-blue-300 hover:text-blue-100 cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>

      {/* Tailwind Keyframes for Stars */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
          }
          @keyframes gradient-xy {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 15s ease infinite;
          }
        `}
      </style>
    </div>
    
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // UI-only placeholder handler
  const onSubmit = (data) => {
    console.log("Signup submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F3D3E] to-[#14532d] px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0F3D3E]">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">Join us and start your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete="off">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                {...register("username", { required: "Username is required" })}
                id="username"
                type="text"
                placeholder="Choose a username"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
                autoComplete="username"
              />
            </div>
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
                autoComplete="email"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
                autoComplete="new-password"
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0F3D3E] hover:bg-[#14532d] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#0F3D3E] font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

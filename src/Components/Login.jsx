import React from "react";
import { useForm } from "react-hook-form";
import { User, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // UI-only placeholder handler
  const onSubmit = (data) => {
    console.log("Login submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F3D3E] to-[#14532d] px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0F3D3E]">Welcome</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
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
                name="username"
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
              />
            </div>
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0F3D3E]"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0F3D3E] hover:bg-[#14532d] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#0F3D3E] font-semibold hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

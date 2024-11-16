import React from "react";
import login from "../../assets/login/login.jpg";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left side - Image */}
        <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative">
          <Image
            src={login}
            alt="Login visual"
            className="object-cover w-full h-full"
            height={1000}
            width={1000}
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-md space-y-6 md:space-y-8">
            {/* Header */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Login
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4 md:space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 block w-full py-2.5 md:py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm md:text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10 block w-full py-2.5 md:py-3 text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-transparent text-sm md:text-base"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex items-center justify-end pt-2">
                <a
                  href="#"
                  className="text-sm md:text-[16px] text-[#4d281180] font-bold hover:text-[#9d502080] transition-colors duration-200"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 md:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm md:text-base font-medium text-white bg-[#fba92e] hover:bg-[#F69E19] transition-colors duration-200 mt-6"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

"use client";

import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// This is a beautifully styled login page component with a two-column grid layout.
// It uses Tailwind CSS for a modern, centered, and responsive design.
const page = () => {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  // Acknowledge the user's session status and redirect to the home page if authenticated.
  useEffect(() => {
    if (status === "authenticated") {
      console.log("User is authenticated:", session.user);
      router.push("/");
    }
  }, [status, router, session]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError(""); // Clear previous errors

    // Call the signIn function with the 'credentials' provider.
    // The credentials provider must be configured in your NextAuth options.
    const result = await signIn("credentials", {
      redirect: false, // Prevent a full page reload
      username,
      password,
    });

    if (result?.error) {
      // If there's an error from the authentication provider, display it.
      setLoginError("Invalid username or password.");
      console.error("Login error:", result.error);
    } else if (result?.ok) {
      // If authentication is successful, the useEffect hook will handle the redirection.
      // We don't need to do anything here because the session status will change.
      console.log("Login successful, redirecting...");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Image */}
        <div className="hidden md:flex h-full">
          <img
            src="https://unsplash.com/photos/black-sunglasses-on-white-surface-yDC3NXxrtyc"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        {/* Column 2: Login Options */}
        <div className="space-y-8 text-center">
          <div className="text-3xl font-extrabold text-gray-800">Welcome!</div>

          {/* Username and Password Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            {loginError && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {loginError}
              </p>
            )}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold shadow-md
                         transition-transform duration-200 ease-in-out  hover:scale-[1.01]
                         focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Enter
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Google Sign-In Button */}
            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-xl text-lg font-semibold text-gray-700
                         transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-[1.02]
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FcGoogle className="text-3xl" />
              Continue with Google
            </button>

            {/* GitHub Sign-In Button */}
            <button
              onClick={() => signIn("github")}
              className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-xl text-lg font-semibold text-gray-700
                         transition-transform duration-200 ease-in-out hover:bg-gray-50 hover:scale-[1.02]
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaGithub className="text-3xl" />
              Continue with GitHub
            </button>
          </div>

          {/* Conditional rendering for authenticated users */}
          {status === "authenticated" && (
            <div className="mt-8">
              <p className="text-gray-600">
                You are signed in as {session.user?.name}.
              </p>
              <button
                onClick={() => signOut()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl shadow-md
                           transition-colors duration-200 ease-in-out hover:bg-red-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

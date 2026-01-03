"use client";

import Image from "next/image";
import React, { useState, useActionState, useEffect } from "react";
import { login } from "@/app/actions/auth";
import { useRouter } from "next/navigation"; // 1. Import the router

export default function AdminLoginPage() {
  const router = useRouter(); // 2. Initialize the router
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(login, null);

  // 3. History Protection Logic
  useEffect(() => {
    if (state?.success) {
      // Use replace so the user can't click "Back" to return here
      router.replace("/prayer/admin/prayers");
    }
  }, [state, router]);
  //SECOND USEEFFECT to handle the back button specifically
  useEffect(() => {
    // If the page loads, check if the session cookie exists in the browser
    // (Optional but powerful: you can check document.cookie here)
    if (document.cookie.includes("admin_session")) {
      router.replace("/prayer/admin/prayers");
    }
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-xl border border-purple-100 overflow-hidden">
        {/* Compact Header */}
        <div className="bg-purple-500 py-6 text-center text-white">
          <div className="inline-block p-0.6 bg-white/20 rounded-full mb-2">
            <Image
              src="/logo.png"
              alt="pprm logo"
              width={100}
              height={20}
              className="w-[90px] md:w-[50px] lg:w-[75] h-auto"
              sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 300px"
              priority
            />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-widest">
            Admin Access
          </h2>
        </div>

        <div className="p-6 space-y-5">
          {/* Bible Passage */}
          <div className="text-center">
            <p className="italic text-purple-800 text-sm leading-snug">
              "The effectual fervent prayer of a righteous man availeth much"
            </p>
            <p className="text-purple-400 font-bold text-xs mt-1">
              — James 5:16b
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-4">
            {state?.error && (
              <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded">
                {state.error}
              </p>
            )}

            {/* Password Input Container */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="w-full p-3 border-2 border-purple-50 rounded-lg focus:border-purple-500 focus:outline-none transition-all text-sm pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600 focus:outline-none"
              >
                {showPassword ? (
                  <span className="text-xs font-bold uppercase">Hide</span>
                ) : (
                  <span className="text-xs font-bold uppercase">Show</span>
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-purple-200 transition-all active:scale-95 disabled:bg-gray-300"
            >
              {isPending ? "VERIFYING..." : "ENTER DASHBOARD"}
            </button>
          </form>

          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
            Church Admin Only
          </p>
        </div>
      </div>
    </div>
  );
}

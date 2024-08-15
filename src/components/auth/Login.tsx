"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { mockAccounts } from "../mockData/MockData";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError("User not found");
      return;
    }
    if (userAccount.holder.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
    router.push("/dashboard");
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <div className="h-screen bg-[white] p-4">
        <div className="mt-3">
          {error && (
            <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="bg-white mx-auto rounded-xl max-w-[500px] py-7">
          <Header />
          <form onSubmit={handleLogin} className="mt-5">
            <div className="flex flex-col gap-6 p-5">
              <div className="flex flex-col">
                <label
                  htmlFor="Username"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  className="p-2 px-0 text-[#5c5c5c] bg-transparent border-b border-gray-300 outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="p-2 px-0 text-[#5c5c5c] bg-transparent border-b border-gray-300 outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#007AC0] w-full text-white font-semibold rounded-md"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="border loginBottom mt-[20px] relative rounded-[20px] w-full min-h-[350px] overflow-hidden">
            <div className="absolute bottom-[30px] bg-white p-[10px_30px] w-full left-0 right-0">
              <p className="text-sm text-[#72253D]">Financial Exploration</p>
              <p className="uppercase font-semibold text-[#002856]">Your Financial Guided Tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

function Verify() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    let email;

    if (typeof window !== "undefined") {
      email = await localStorage.getItem("email");
    }

    try {
      const { data } = await axios.post("/api/verify", { email, otp });

      if (data.message) {
        await toast.success(data.message);
        await router.push("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isLoggedIn) return router.push("/");

  return (
    <div>
      <div className="verify lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8  w-full m-auto -mt-1.5 md:mt-0">
        <h1 className="text-gray-900 text-lg font-medium title-font mb-5">
          Verify Your Account
        </h1>
        <form onSubmit={submitHandler}>
          <input
            type="Number"
            placeholder="Enter Your Otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            required
          />

          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2">
            verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verify;

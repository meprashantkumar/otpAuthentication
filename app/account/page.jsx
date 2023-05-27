"use client";
import { fetchUser } from "@/actions/userActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";

function Account() {
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", null);
    }
    await toast.success("Logged Out");
    await dispatch(fetchUser());
  };

  if (!isLoggedIn) return redirect("/");
  return (
    <div>
      {user && (
        <>
          <p className="text-2xl text-gray-500 mt-6 text-center">
            Name - {user.name} <br /> Email - {user.email} <br />
            <button
              className="text-xl p-1 bg-red-600 text-white ml-6 hover:bg-red-700"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Account;

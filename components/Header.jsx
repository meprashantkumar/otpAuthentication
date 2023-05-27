"use client";
import { fetchUser } from "@/actions/userActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : false;
    dispatch(fetchUser(token));
  }, [dispatch]);
  return (
    <div className="bg-blue-600 p-3 text-center text-white text-2xl">
      <Link href={"/"}>Header</Link>
      {isLoggedIn && (
        <>
          <Link href={"/"} className="ml-10">
            Home
          </Link>
          <Link href={"/account"} className="ml-10">
            Account
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;

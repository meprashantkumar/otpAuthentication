"use client";
import Toggle from "@/components/Toggle";
import { useSelector } from "react-redux";

export default function Home() {
  const { user, isLoggedIn, loading } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <p className="text-center text-4xl mt-10 text-gray-700">Loading</p>
      ) : (
        <>
          {user && isLoggedIn ? (
            <>
              <div className="verify lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8  w-full m-auto -mt-1.5 md:mt-0 text-center">
                welcome {user.name}
              </div>
            </>
          ) : (
            <Toggle />
          )}
        </>
      )}
    </>
  );
}

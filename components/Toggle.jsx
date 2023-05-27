"use client";

import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )}
    </div>
  );
}

export default Toggle;

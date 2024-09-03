"use client";
import { signOut } from "@/lib/auth/signOut";
import React from "react";

const LogOutBtn = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      log out
    </button>
  );
};

export default LogOutBtn;

"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const signIn = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await fetch("http://localhost:4000/v1/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (res.status !== 200) {
    return null;
  }
  const data = await res.json();
  console.log({ data });

  cookies().set("USER_SESSION", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  redirect("/dashboard");
};

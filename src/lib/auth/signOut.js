"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  cookies().delete("USER_SESSION");
  redirect("/signin");
};

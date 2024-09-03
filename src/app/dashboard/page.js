import LogOutBtn from "@/components/logOutBtn";
import { cookies } from "next/headers";
import Link from "next/link";
// import { redirect } from "next/navigation";

export const getUser = async () => {
  const accessToken = cookies().get("USER_SESSION")?.value;
  console.log({ accessToken });
  if (!accessToken) {
    return null;
  }
  const res = await fetch("http://localhost:4000/v1/me", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      authorization: accessToken,
    },
  });
  const user = await res.json();
  return { user, accessToken };
};

export default async function Page() {
  const USER = await getUser();

  // if (!USER) {
  //   redirect("/signin");
  // }
  return (
    <main>
      <header className="w-full p-4 border border-gray-dark">
        <LogOutBtn />
      </header>
      <div>{USER?.user?.email}</div>
      <div>{USER?.user?.name}</div>
      <Link href="/dashboard/testClient">TEST CLIENT</Link>
    </main>
  );
}

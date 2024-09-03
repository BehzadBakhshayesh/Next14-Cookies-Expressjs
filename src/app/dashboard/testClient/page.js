"use client";

import { useSession } from "@/providers/sessionProvider";

export default function Page() {
  const USER = useSession();

  useEffect(() => {
    fetch("http://localhost:4000/...", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: USER?.accessToken,
      },
    });
  }, []);

  return (
    <div>
      <div>{USER?.user?.email}</div>
      <div>{USER?.user?.name}</div>
    </div>
  );
}

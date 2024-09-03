import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/signin">sign in</Link>
      <hr />
      Home
    </main>
  );
}

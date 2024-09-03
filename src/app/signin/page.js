import { signIn } from "@/lib/auth/signIn";

export default function Signin() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <form
        className="w-full flex flex-col gap-1  max-w-xl p-2 py-4 shadow-2xl rounded-1"
        action={signIn}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          className="w-full p-1 rounded-1 outline-0 border border-gray-dark "
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="w-full p-1 rounded-1 outline-0 border border-gray-da"
        />
        <input
          type="submit"
          className="w-full p-1 rounded-1 flex items-center justify-center bg-gray-dark text-white cursor-pointer"
          value=" Sign In"
        />
      </form>
    </main>
  );
}

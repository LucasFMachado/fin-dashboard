import Link from "next/link";
export default function Login() {
  return (
    <main className="w-full bg-slate-500 p-4">
      <p>Login</p>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}

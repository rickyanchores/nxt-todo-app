import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid items-center justify-center h-screen">
      <div className="text-2xl">
        <h1>project todo</h1>
        <Link href="/dashboard">dashboard</Link>
      </div>
    </main>
  );
}

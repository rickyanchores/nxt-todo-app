import Image from "next/image";
import Link from "next/link";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <main className="grid bg-black h-screen">
      <Home />
      <div className="text-2xl">
        <h1>project todo</h1>
        <Link className="hover:bg-orange-700 p-4" href="/dashboard">dashboard</Link>
      </div>
    </main>
  );
}

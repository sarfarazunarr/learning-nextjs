import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-3xl font-bold">Hello World</h1>
    <Link className="px-3 py-3 rounded-md bg-green-400 text-xl" href={"/country/pakistan"}>Visit Pakistan</Link>
    <Link className="px-3 py-3 rounded-md bg-blue-400 text-xl" href={"/country/japan"}>Visit Japan</Link>
    </main>
    
  );
}

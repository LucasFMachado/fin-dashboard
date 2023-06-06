"use client";
import { useMenu } from "@/contexts/MenuContext";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { toggleMenu } = useMenu();

  return (
    <header className="bg-slate-800 px-6 h-16 flex items-center justify-between text-slate-300">
      <div className="flex items-center gap-4">
        <button
          className="hover:bg-slate-300 hover:text-slate-800 transition duration-300 rounded-full h-10 w-10 flex items-center justify-center"
          title="Toggle menu"
          onClick={toggleMenu}
        >
          <AiOutlineMenu size={25} />
        </button>
        <h1 className="text-2xl font-thin">Dashboard</h1>
      </div>
      <div className="flex items-center gap-6">
        <Image
          className="rounded-full"
          width={35}
          height={35}
          src="/profile.png"
          alt="Profile image"
        />
        <p className="font-bold">Lucas Machado</p>
      </div>
    </header>
  );
}

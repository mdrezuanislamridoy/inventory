"use client";

import { BiBell, BiMessage, BiUser, BiSearch } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-tight flex-shrink-0">
        Inventory.io
      </h1>

      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-full placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <button className="p-2 rounded-full hover:bg-white/20 transition md:hidden">
          <BiSearch className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiMessage className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiBell className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/20 transition hidden sm:block">
          <CiSettings className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiUser className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}

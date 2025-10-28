"use client";

import { BiBell, BiMessage, BiUser } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-tight">Inventory.io</h1>

      <div className="flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-full placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiMessage className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiBell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <CiSettings className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <BiUser className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-3 py-4 flex justify-between items-center shadow-black/40 shadow-2xl">
      <div className="text-2xl font-bold">
        <Link to="/">Movies App</Link>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="text-xl px-3 rounded-xl hover:bg-gray-900 py-2 font-light">
          Home
        </Link>
        <Link to="/favorites" className="text-xl px-3 rounded-xl hover:bg-gray-900 py-2 font-light">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

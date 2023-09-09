import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
        <a
          class="font-extrabold  text-xl tracking-tight text-emerald-400"
          href="#"
        >
          FitPros
        </a>
        <div class="flex items-center">
          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            Link
            to="/fitpros"
          >
            Home
          </Link>

          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            Link
            to="/showpage"
          >
            Search Events
          </Link>

          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            Link
            to="/event"
          >
            Create
          </Link>
          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            Link
            to="/profile"
          >
            My Profile
          </Link>
          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            href="#"
          >
            Logout{" "}
          </Link>
        </div>
      </nav>
    </header>
  );
}

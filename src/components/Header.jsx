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

          <a
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            href="#"
          >
            Search Events
          </a>

          <Link
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            Link
            to="/event"
          >
            Create
          </Link>
          <a
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            href="#"
          >
            My Profile
          </a>
          <a
            class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            href="#"
          >
            Logout{" "}
          </a>
        </div>
      </nav>
    </header>
  );
}

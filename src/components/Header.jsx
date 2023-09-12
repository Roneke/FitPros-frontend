import React from "react";
import { Link } from "react-router-dom";
import LogoutLink from "./pages/LogoutLink";

export default function Header() {
  const isUserLoggedIn = localStorage.jwt !== undefined;

  return (
    <header>
      <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
        <Link
          className="font-extrabold text-xl tracking-tight text-emerald-400"
          to="/fitpros"
        >
          FitPros
        </Link>
        <div className="flex items-center">
          <Link
            className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
            to="/fitpros"
          >
            Home
          </Link>
          {isUserLoggedIn && (
            <>
              <Link
                className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
                to="/showpage"
              >
                Search Events
              </Link>

              <Link
                className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
                to="/event"
              >
                Create
              </Link>
              <Link
                className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-800"
                to="/profile"
              >
                My Profile
              </Link>
            </>
          )}
          <LogoutLink />
        </div>
      </nav>
    </header>
  );
}

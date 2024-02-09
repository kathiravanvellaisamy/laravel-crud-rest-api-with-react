import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-pink-950 py-2 shadow">
      <nav className="max-w-5xl mx-auto px-5 my-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-50 py-2">
              LaraReact
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-md uppercase text-slate-100">
              Home
            </Link>
            <Link
              to="/skills/create"
              className="text-md uppercase text-slate-100"
            >
              Create Skill
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

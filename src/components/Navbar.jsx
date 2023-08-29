import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const search = (e) => {
    e.preventDefault();
    nav(`/search/${name}`);
  };

  return (
    <div>
      <nav className="md:w-[1100px] w-full px-2 z-20 flex justify-between items-center mx-auto ">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-16" />
        </Link>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search recipe"
            onChange={(e) => setName(e.target.value)}
            className=" outline-none shadow-lg  px-4 py-2 text-yellow-600 font-medium bg-gray-300 rounded-md"
          />
        </form>
      </nav>
    </div>
  );
};

export default Navbar;

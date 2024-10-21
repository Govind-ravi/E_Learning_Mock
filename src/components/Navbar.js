// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for menu and close

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    setSearchTerm("");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="">
        <div className="text-white font-bold text-2xl">
          <Link to="/">E-Learning</Link>
        </div>
      </div>
      <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search Courses..."
            className="p-2 rounded-l-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-800 p-2 rounded-r-lg text-white"
          >
            <IoMdSearch size={24} />
          </button>
        </form>
      {/* Side Menu */}
      <div className={`md:hidden ${isMenuOpen ? "right-0" : "-right-full"} fixed top-0 text-3xl bg-gray-600 h-screen w-[40%] p-8 transition-all duration-500 ease-in-out`}>
        <ul className="flex flex-col space-y-8">
          <li className="flex justify-between">
            <Link className="text-white hover:text-gray-300" to="/" onClick={toggleMenu}>
              Home
            </Link>
            <button onClick={toggleMenu} className="text-white">
            <HiX size={24} />
          </button>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/courses" onClick={toggleMenu}>
              Courses
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/signin" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link className="text-white hover:text-gray-300" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/signin">
            Sign In
          </Link>
        </li>
      </ul>
      <div className="md:hidden"> {/* Only show this button on smaller screens */}
          <button onClick={toggleMenu} className="text-white">
            <HiMenu size={24} />
          </button>
        </div>
    </nav>
  );
};

export default Navbar;

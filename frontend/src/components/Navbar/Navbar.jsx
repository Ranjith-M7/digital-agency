import React, { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png"; // keep your logo

export const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Projects", link: "/projects" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo (top navbar) */}
          <a href="/" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10" />
            <span className="text-2xl sm:text-3xl font-semibold text-red-600">
              HUB Creation
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="cursor-pointer py-4">
                  <Link
                    to={link}
                    className="text-md lg:text-md  font-medium text-black hover:text-red-500 py-2 transition-all duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <Link to="/contact">
                <button className="btn-primary bg-red-600 text-white hover:bg-red-700">
                  Contact Us
                </button>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-4 md:hidden">
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer text-2xl text-red-600"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "left-0" : "left-[-100%]"
        } fixed top-0 bottom-0 w-full bg-white z-[100] p-6 flex flex-col justify-between transition-all duration-300`}
      >
        {/* Close button (top-right) */}
        <div className="flex justify-end">
          <HiMenuAlt3
            onClick={toggleMenu}
            className="cursor-pointer text-3xl text-red-600"
          />
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center mt-6">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Menu links */}
        <nav className="mt-12 space-y-6 text-center">
          {MenuLinks.map(({ id, name, link }) => (
            <Link
              key={id}
              to={link}
              onClick={toggleMenu}
              className="block text-black font-medium hover:text-red-600 transition text-lg"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium shadow hover:bg-red-700 transition">
            Book A Call
          </button>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-around items-center text-red-600 mt-12">
          <div className="flex flex-col items-center text-xs cursor-pointer hover:opacity-80">
            <FiPhone className="text-xl" />
            <span className="text-black mt-1">Call</span>
          </div>
          <div className="flex flex-col items-center text-xs cursor-pointer hover:opacity-80">
            <FiMail className="text-xl" />
            <span className="text-black mt-1">Email</span>
          </div>
          <div className="flex flex-col items-center text-xs cursor-pointer hover:opacity-80">
            <FiMapPin className="text-xl" />
            <span className="text-black mt-1">Location</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

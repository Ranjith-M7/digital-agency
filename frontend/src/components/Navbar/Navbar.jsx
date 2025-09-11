import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav>
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-10" />
                <span className="text-2xl sm:text-3xl font-semibold text-red-600">
                  HUB Creations
                </span>
              </Link>
            </div>
            {/* Desktop NavLinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <Link
                        to={link}
                        className="text-lg font-medium text-black hover:text-red-500 py-2 transition-all duration-500"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
                <Link to="/contact">
                  <button className="btn-primary bg-red-600 text-white hover:bg-red-700">
                    Contact Us
                  </button>
                </Link>
              </ul>
            </div>
            {/* Mobile view */}
            <div className="flex items-center gap-4 md:hidden">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl text-red-600"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl text-red-600"
                />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu Section */}
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;

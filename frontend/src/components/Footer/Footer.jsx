import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 md:py-16">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20">
          {/* Left Side: Company Info & Socials */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-bold text-brand-red font-heading mb-2">
              HUB Creation
            </h2>
            <p className="text-gray-600 max-w-sm mb-6">
              Crafting digital experiences that drive real results. We are your
              trusted partner for digital success.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-brand-red transition-colors duration-200"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-red transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-red transition-colors duration-200"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-red transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around text-center md:text-left gap-8">
            {/* Quick Links Column */}
            <div className="w-full">
              <h3 className="text-lg font-bold font-heading mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    to="/"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies Column */}
            <div className="w-full">
              <h3 className="text-lg font-bold font-heading mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-red transition-colors duration-200"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-brand-red font-semibold">HUB Creation</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

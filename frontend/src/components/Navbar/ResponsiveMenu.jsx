import React from "react";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-300 pt-16 px-8 bg-white z-50}`}
    >
      <div className="card">
        {/* Menu section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <a href={link} className="mb-5 inline-block">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

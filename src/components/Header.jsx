import React from "react";

import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";

import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-screen fixed z-50 p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="log" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <img
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl"
            alt="userImage"
          />
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;

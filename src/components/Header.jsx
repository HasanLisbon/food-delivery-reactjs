import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";

import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firbase.config";

import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { useStateValue } from "../context/StateProvidder";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(refreshToken);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!isMenu);
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    setMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    navigate("/");
  };
  return (
    <header className="w-screen fixed z-50 p-3 bg-primary px-4 md:p-6 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="log" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
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
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full"
              alt="userImage"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="flex flex-col bg-gray-50 absolute rounded-lg shadow-xl right-0 top-12 w-40 "
              >
                {user && user.email === "simul.citycollege@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 items-center flex gap-3 cursor-pointer text-textColor text-base hover:bg-slate-100 transition-all duration-100 ease-in-out"
                      onClick={() => setMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 items-center flex gap-3 cursor-pointer text-textColor text-base hover:bg-slate-100 transition-all duration-100 ease-in-out"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="log" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full"
            alt="userImage"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex flex-col bg-gray-50 absolute rounded-lg shadow-xl right-0 top-12 w-40 "
            >
              {user && user.email === "simul.citycollege@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 items-center flex gap-3 cursor-pointer text-textColor text-base hover:bg-slate-100 transition-all duration-100 ease-in-out"
                    onClick={() => setMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex flex-col "
              >
                <li
                  className="text-base text-headingColor hover:bg-slate-100 px-4 py-2 transition-all duration-100 ease-in-out"
                  onClick={() => setMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-headingColor hover:bg-slate-100 px-4 py-2 transition-all duration-100 ease-in-out"
                  onClick={() => setMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-headingColor hover:bg-slate-100 px-4 py-2 transition-all duration-100 ease-in-out "
                  onClick={() => setMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-headingColor hover:bg-slate-100 px-4 py-2 transition-all duration-100 ease-in-out"
                  onClick={() => setMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="px-4 py-2 m-2 p-2 shadow-lg bg-gray-200 items-center justify-center flex gap-3 cursor-pointer text-textColor text-base hover:bg-slate-300 transition-all duration-100 ease-in-out"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

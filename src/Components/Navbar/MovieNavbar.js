import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown,BiMenu,BiChevronLeft,BiShareAlt } from "react-icons/bi";

const NavSm = () => {
  return (
    <div className="text-white flex items-center justify-between   ">
      <div>
        <h1 className=" text-xl font-bold">Its All Start Here !</h1>
        
      </div>
      <div className="w-6 h-6">
        <BiShareAlt className="w-full h-full " />
      </div>
    </div>
  );
};

const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-2 px-3 py-3 rounded-sm">
      <BiSearch />
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder=" Search for Movies,Events,Plays,Sports and Activities"
      ></input>
    </div>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/2 ">
          <div className="w-20 h-12 px-1">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="Logo"
              className="w-full h-full"
            />
          </div>

          <div className="w-full flex items-center bg-white gap-2 px-3 py-3 rounded-sm">
            <BiSearch />
            <input
              type="search"
              className="w-full text-xs  "
              placeholder=" Search for Movies,Events,Plays,Sports and Activities"
            ></input>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <span className="text-gray-300 text-xs flex items-center hover:text-white  cursor-pointer">
            Trichy <BiChevronDown />
          </span>
          <button className="bg-red-500 text-xs rounded px-1 py-1 text-white">
            Sign in
          </button>
          <div className="w-6 h-6 text-white cursor-pointer">
            <BiMenu  className="w-full h-full"/></div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className=" bg-navcol-700 text-white  px-4 py-1 ">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden lg:hidden md:block">
          <NavSm />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;

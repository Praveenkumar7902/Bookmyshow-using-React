import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown,BiMenu } from "react-icons/bi";
import Sports from "../../Layouts/SportsLayout";

const NavSm = () => {
  return (
    <div className="text-white flex items-center justify-between   ">
      <div>
        <h1 className=" text-xl font-bold">Its All Start Here !</h1>
        <span className="text-gray-400 text-xs flex items-center ">
          Trichy <BiChevronRight />
        </span>
      </div>
      <div className="w-6 h-6">
        <BiSearch className="w-full h-full " />
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
 export const NavBottom = () => {
  return (
  <><div className="flex justify-between w-full">
  <div className="bg-navcol-1100 px-4 w-full h-12 text-gray-300 text base gap-6 py-2 flex">
    <h1>Movies</h1>
    <h1>Stream</h1>
    <h1>Events</h1>
    <h1>Plays</h1>
    <h1 onClick={Sports} className="cursor-pointer">Sports</h1>
    <h1>Activities</h1>
       </div>
    <div className="flex bg-navcol-1100  text-gray-300 px-16 py-3 text-sm  gap-4">
    <h1>ListYourShows</h1>
    <h1>Corporates</h1>
    <h1>Offers</h1>
    <h1>GiftCards</h1>
   
  </div>
  </div>
  </>
  )
};
export const NavBottomMovie = () => {
  return (
  <><div className="flex justify-between w-full">
  <div className="bg-navcol-1100 px-4 w-full h-12 text-gray-300 text base gap-6 py-2 flex">
    <h1 className="font-bold cursor-pointer">Movies</h1>
    <h1>Stream</h1>
    <h1>Events</h1>
    <h1>Plays</h1>
    <h1>Sports</h1>
    <h1>Activities</h1>
       </div>
    <div className="flex bg-navcol-1100  text-gray-300 px-16 py-3 text-sm  gap-4">
    <h1>ListYourShows</h1>
    <h1>Corporates</h1>
    <h1>Offers</h1>
    <h1>GiftCards</h1>
   
  </div>
  </div>
  </>
  )
};
export const NavBottomSports = () => {
  return (
  <><div className="flex justify-between w-full">
  <div className="bg-navcol-1100 px-4 w-full h-12 text-gray-300 text base gap-6 py-2 flex">
    <h1>Movies</h1>
    <h1>Stream</h1>
    <h1>Events</h1>
    <h1>Plays</h1>
    <h1 className="font-bold  cursor-pointer">Sports</h1>
    <h1>Activities</h1>
       </div>
    <div className="flex bg-navcol-1100  text-gray-300 px-16 py-3 text-sm  gap-4">
    <h1>ListYourShows</h1>
    <h1>Corporates</h1>
    <h1>Offers</h1>
    <h1>GiftCards</h1>
   
  </div>
  </div>
  </>
  )
};

const Navbar = () => {
  return (
    <>
      <nav className=" bg-navcol-700  px-4 py-1">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden lg:hidden md:flex">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

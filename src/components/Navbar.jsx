import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full absolute z-10">
      <h1 className="text-4xl text-red-600 font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className=" pr-4 cursor-pointer text-white">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;

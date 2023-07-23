import React from "react";
import netflixBg from "../assets/netflix-bg.jpg";
import { SavedMovies } from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src={netflixBg}
          alt="netflix-background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className=" absolute top-[20%] p-4 md:p-4">
            <h1 className="text-3xl md:text-4xl">My Favorites</h1>
          </div>
        </div>
        <SavedMovies />
      </div>
    </>
  );
};

export default Account;

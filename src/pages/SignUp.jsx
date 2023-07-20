import React from "react";
import netflixBg from "../assets/netflix-bg.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={netflixBg}
          alt="netflix-background"
        />
        <div className="  bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-5">
          <div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className=" text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-[#e8f0fe] rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="p-3 my-2 bg-[#e8f0fe] rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400/75">
                  <p>
                    <input className=" mr-2 accent-gray-400" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-16">
                  <span className="text-gray-400/75">
                    Already subscribed to Netflix?
                  </span>
                  <Link className="ml-2" to={"/login"}>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

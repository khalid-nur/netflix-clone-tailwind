import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <div className="flex items-center justify-between p-4 w-full absolute z-10">
      <Link to={"/"}>
        <h1 className="text-4xl text-red-600 font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user ? (
        <div>
          <Link to={"/account"}>
            <button className=" pr-4 cursor-pointer text-white">Account</button>
          </Link>
          <button
            onClick={logoutHandler}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className=" pr-4 cursor-pointer text-white">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

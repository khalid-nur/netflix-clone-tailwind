import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";

const Movies = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  console.log(user);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please login to save a movie");
    }
  };

  return (
    <div className="w-[160px] inline-block cursor-pointer relative p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt=""
      />

      <div className=" absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className=" whitespace-normal text-xs font-bold flex justify-center items-center h-full text-center md:text-sm ">
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;

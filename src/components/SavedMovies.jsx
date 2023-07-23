import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log(doc.data());
      setMovies(doc.data()?.savedMovies);
    });
    return () => {};
  }, [user?.email]);

  const moviesRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (movieID) => {
    try {
      const result = movies.filter((items) => {
        return items.id !== movieID;
      });
      await updateDoc(moviesRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl">My Favorites</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          className="bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block  "
          size={30}
          onClick={slideLeft}
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider"}
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] inline-block cursor-pointer relative p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt=""
              />

              <div className=" absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className=" whitespace-normal text-xs font-bold flex justify-center items-center h-full text-center md:text-sm ">
                  {item?.title}
                </p>
                <p
                  className="absolute top-4 right-4 text-gray-300"
                  onClick={() => {
                    deleteMovie(item.id);
                  }}
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          className="bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={30}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

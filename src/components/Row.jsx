import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="relatice flex items-center">
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relatives"
          id={"slider"}
        >
          {movies.map((item, id) => (
            <Movies key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

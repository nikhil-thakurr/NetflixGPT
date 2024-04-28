import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerId } from "../utils/moviesSlice";

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();
//   console.log(movieId);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+
      movieId +
      "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const Alltrailer = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = Alltrailer.length ? Alltrailer[0] : json.results[0];
    const key = trailer.key;
    
    dispatch(addTrailerId(key));
  };
}

export default useMovieTrailer
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcoming =()=>{
    const dispatch =useDispatch();
    const movies =async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
  
      const json= await data.json();
    //   console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(()=>{
      movies()
    },[])
}

export default useUpcoming;
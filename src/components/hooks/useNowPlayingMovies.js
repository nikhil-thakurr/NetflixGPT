import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addnowPlayingMovies } from "../utils/moviesSlice";



const useNowPlayingMovies =()=>{
    const dispatch =useDispatch();
    const movies =async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  
      const json= await data.json();
      // console.log(json.results);
      dispatch(addnowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      movies()
    },[])
}

export default useNowPlayingMovies;
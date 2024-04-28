import React from "react";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ( {movieId} ) => {
    // console.log(movieId);
   const trailerId = useSelector((store) => store.movies?.trailerId);
    useMovieTrailer(movieId);

   
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId +"?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

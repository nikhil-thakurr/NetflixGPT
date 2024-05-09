import React from "react";

const VideoTitle = ({ name, description }) => {
  return (
    <div className="pt-[22%] px-6 md:px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-xl md:text-5xl font-extrabold">{name}</h1>
      <p className="w-1/2 hidden md:inline-block py-4">{description}</p>

      <div className="mt-2 md:mt-0">
        <button className="bg-white text-black rounded-lg w-16 md:w-32 h-10 md:h-14 mx-2 hover:bg-opacity-80 ">
          ▶️Play
        </button>
        <button className="bg-gray-200 text-black rounded-lg w-16 md:w-32 h-10 md:h-14  opacity-60 hidden md:inline-block">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;

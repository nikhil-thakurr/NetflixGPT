import React from "react";

const VideoTitle = ({ name, description }) => {
  return (
    <div className="pt-[22%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-5xl font-extrabold">{name}</h1>
      <p className="w-1/2 py-4">{description}</p>

      <div>
        <button className="bg-white text-black rounded-lg w-32 h-14 mx-2 hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="bg-gray-200 text-black rounded-lg w-32 h-14 opacity-60">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;

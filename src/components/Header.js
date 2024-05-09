import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, PROFILE_LOGO } from "./utils/constants";
import { useNavigate } from "react-router-dom";
import { showGptView } from "./utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.gpt.gptView);
  //  console.log(showGptView);

  const showGptSearch = () => {
    dispatch(showGptView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between ">
      <img className="w-44 px-6 py-2 mx-[27%] md:mx-2" src={NETFLIX_LOGO} alt="Netflix" />

      {user && (
        <div className="flex items-center px-20 md:p-4 ">
          <button
            className="bg-red-700 mx-2 p-2  rounded-lg text-white"
            onClick={showGptSearch}
          >
            { (gptView) ? "HomePage" : "AISearch"}
          </button>
          <img className="w-10  rounded-md" src={PROFILE_LOGO} alt="" />

          <p onClick={handleSignOut} className="text-white cursor-pointer ml-4">
            <button className="bg-purple-500 p-2 rounded-lg">SignOut</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;

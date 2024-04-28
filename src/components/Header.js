import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import {useDispatch} from "react-redux"
import { NETFLIX_LOGO, PROFILE_LOGO } from "./utils/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
 const dispatch=useDispatch();
 const navigate = useNavigate();
 const user = useSelector((store) => store.user);


  useEffect(() => {
    const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {

        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
        navigate("/browse");
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=>unsubscribe()
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 px-6 py-2 "
        src={NETFLIX_LOGO}
        alt="Netflix"
      />

      {user && (
        <div className="flex items-center p-4 cursor-pointer">
          <img
            className="w-10"
            src={PROFILE_LOGO}
            alt=""
          />

          <p onClick={handleSignOut} className="text-white">
            (Sign Out)
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;

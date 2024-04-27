import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "./utils/validations";
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {useDispatch} from "react-redux"
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [handleToggle, sethandleToggle] = useState(false);
  const [errormsg, seterrormsg] = useState("");
  const dispatch=useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null)

  const handlebtn = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    
    seterrormsg(message);
    if (message) return;

    if (!handleToggle) {
        signInWithEmailAndPassword(auth, email.current.value,
            password.current.value)
          .then((userCredential) => {
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorMessage);
          });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user=userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                console.log(auth);
                const {uid,email,displayName,photoURL} = auth;
                dispatch(addUser({uid,email,displayName,photoURL}))
                // ...
              }).catch((error) => {
                seterrormsg(error);
              });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode);
          // ..
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix-Image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black m-auto right-0 left-0 my-32 flex flex-col text-white bg-opacity-80 "
      >
        {!handleToggle ? (
          <h1 className="text-3xl py-4">Sign In</h1>
        ) : (
          <h1 className="text-3xl py-4">Sign Up</h1>
        )}
        {handleToggle && (
          <input
          ref={name}
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 bg-opacity-70"
          />
        )}
        <input
          ref={email}
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="p-4 my-4 bg-gray-700 bg-opacity-70"
        />
        <input
          ref={password}
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 bg-opacity-70"
        />
        <p className="text-red-600 font-bold text-lg">{errormsg}</p>
        {!handleToggle ? (
          <button className="py-4 bg-red-700 my-6" onClick={handlebtn}>
            Sign In
          </button>
        ) : (
          <button className="py-4 bg-red-700 my-6" onClick={handlebtn}>
            Sign Up
          </button>
        )}

        {!handleToggle ? (
          <p
            className="py-4 cursor-pointer"
            onClick={() => sethandleToggle(!handleToggle)}
          >
            <span className="text-gray-400">New to Netflix ?</span> Sign Up Now
            .
          </p>
        ) : (
          <p
            className="py-4 cursor-pointer"
            onClick={() => sethandleToggle(!handleToggle)}
          >
            <span className="text-gray-400">Already an User ?</span> Sign In Now
            .
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

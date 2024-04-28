import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const appstore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
  },
});

export default appstore;

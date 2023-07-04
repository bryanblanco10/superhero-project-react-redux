import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { superHeroReducer } from "./reducers/superHero"
export default configureStore({
  reducer: {
    authReducer,
    superHeroReducer,
  },
});
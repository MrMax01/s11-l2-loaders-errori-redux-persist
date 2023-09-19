import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteJobReducer from "../reducer/favoriteJobReducer";
import jobsReducer from "../reducer/jobsReducer";

const rootReducer = combineReducers({
  favoriteList: favoriteJobReducer,
  jobs: jobsReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;

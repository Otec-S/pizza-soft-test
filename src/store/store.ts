import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice";

const rootReducer = combineReducers({
  employeesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

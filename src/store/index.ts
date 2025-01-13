import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./slices/bookmarkSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookmarks: bookmarkReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

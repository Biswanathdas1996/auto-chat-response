import { configureStore } from "@reduxjs/toolkit";

import configReducer from "./slices/config/configSlice";
import counterReducer from "./slices/counter/counterSlice";
import apiReducer from "./slices/api/usersSlice";

export const store = configureStore({
  reducer: {
    config: configReducer,
    counter: counterReducer,
    users: apiReducer,
  },
});

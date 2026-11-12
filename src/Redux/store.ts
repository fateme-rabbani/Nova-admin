import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings/settingsSlice";
import productsReducer from "./products/productsSlice";
import usersReducer from "./users/usersSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    products: productsReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

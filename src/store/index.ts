import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./slices/navbar";
import themeReducer from "./slices/theme";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        theme: themeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

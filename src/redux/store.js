import { configureStore, combineReducers } from "@reduxjs/toolkit";
import groupSlice from "./Slices/GroupSlice.js";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { persistReducer, persistStore } from "redux-persist";

// Configuration for redux-persist
const persistConfig = {
    //! The key for the stored data in local storage
    key: "root",
    storage,
    whitelist: ["GROUP"], // Only persist GROUP slice
};

// Combine reducers
const rootReducer = combineReducers({
    GROUP: groupSlice,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const AppStore = configureStore({
    reducer: persistedReducer,
});

// Persistor
export const persistor = persistStore(AppStore);

export default AppStore;

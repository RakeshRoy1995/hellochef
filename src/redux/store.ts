import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";

import { compose } from "redux";
import rootReducer from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers :any =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = configureStore({
  reducer: persistedReducer,
  // composeEnhancers : composeEnhancers,
  middleware: (getDefaultMiddleware :any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);

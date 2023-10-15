// PROJECT IMPORT
import { api } from "./api";

// THIRD - PARTY IMPORT
import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardSlice from "../../features/dashboard/dashboardSlice";
import commonSlice from "../../features/common/commonSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ["api"],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        [api.reducerPath]: api.reducer,
        dashboard:dashboardSlice,
        common:commonSlice
    })
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
            api.middleware,
        ];
    },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

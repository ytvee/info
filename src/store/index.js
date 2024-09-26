// import { enableMapSet } from 'immer';
import { configureStore } from "@reduxjs/toolkit";
import ApplicationReducer from "./slices/application";
// import filesReducer from "./slices/files";
import PostsReducer from "./slices/posts";

// enableMapSet();

export const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        posts: PostsReducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware({
    //         serializableCheck: false,
    //     })
    // }
});

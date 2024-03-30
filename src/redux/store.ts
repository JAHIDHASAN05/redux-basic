import { configureStore } from "@reduxjs/toolkit";

import counterReduce from './features/CounterSlice'

console.log(counterReduce,'adfasd');

 export const store = configureStore({
    reducer:{
        counter : counterReduce
    },

})

console.log(store.getState())

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
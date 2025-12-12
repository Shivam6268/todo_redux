import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todoSlice"

const store = configureStore({
    reducer: {todos: todos}
})


export default store
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        edit: {
            todo: {},
            isEdit: false
        },
        isLoading: false,
        isSuccess: false,
        isError: false
    },
    reducers: {
        remove: (state, action) => {
            return{
                ...state,
                allTodos: state.allTodos.filter(todo => todo._id !== action.payload)
        }
        },
        edit : (state, action) => {
            return{
                ...state,
                edit : {todo: action.payload, isEdit: true}
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = action.payload
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.allTodos = []
            })
            .addCase(addTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = [action.payload, ...state.allTodos]
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.allTodos = []
            })
            .addCase(removeTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true

            })
            .addCase(removeTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.allTodos = []
            })
            .addCase(updateTodo.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allTodos = state.allTodos.map(todo => todo._id === action.payload._id ? action.payload : todo)

            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.allTodos = []
            })
    }

})

export const {remove, edit} = todoSlice.actions

export default todoSlice.reducer

export const fetchTodo = createAsyncThunk("FETCH/TODOS", async () => {
    const res = await axios.get("/api/todo/")
    return res.data
})

export const addTodo = createAsyncThunk("ADD/TODO", async (todoData) => {
    const res = await axios.post("/api/todo/", todoData)
    return res.data
})

export const removeTodo = createAsyncThunk("DELETE/TODO", async (id) => {
    const res = await axios.delete("/api/todo/" + id)
    return res.data
})

export const updateTodo = createAsyncThunk("UPDATE/TODO", async (updateTodo) => {
    const res = await axios.put("/api/todo/" + updateTodo.id, updateTodo)
    return res.data
})


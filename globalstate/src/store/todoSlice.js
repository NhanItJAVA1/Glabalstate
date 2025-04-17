import { createSlice } from "@reduxjs/toolkit"

function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: generateId(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) todo.completed = !todo.completed
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        },
    },
})

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer

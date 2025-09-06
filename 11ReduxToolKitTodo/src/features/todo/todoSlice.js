import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: intialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            const newtodo = {
                id: nanoid(),
                text: action.payload.text
            }

            state.todos = state.todos.map(
                (todo) => todo.id === action.payload.id ? newtodo : todo
            )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
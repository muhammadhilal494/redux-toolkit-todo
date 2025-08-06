import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
        id: nanoid(),
        title: "Learn Redux Toolkit",  
    }
  ],    
// Array to hold todo items
};

export const todoSlice = createSlice(
    {
        name: "todo",
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    title: action.payload.title,
                }
                state.todos.push(todo);
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            },

        }
    }
)

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
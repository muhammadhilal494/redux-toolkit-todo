import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../services/todo/todo-slice';

export const store = configureStore(
    {
        reducer: todoReducer,
    }
)
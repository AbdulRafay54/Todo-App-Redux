// import { createSlice, nanoid } from "@reduxjs/toolkit";


// export const todoSlice = createSlice({
//     name: "Todos",
//     initialState: {
//         todo: []
//     },
//     reducers: {
//         addTodo: (state , action) => {
//             // state ka matlb initial state
//             state.todo.push({
//                 title: action.payload.title,
//                 id: nanoid()
//             })
//         },
//         removeTodo: (state , action) =>{
//             state.todo.splice(action.payload.index , 1)
//         }
//     }
// })



// export const { addTodo , removeTodo , editTodo } = todoSlice.actions
// export default todoSlice.reducer
import { createSlice , nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload.title,
            });
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1);
        },
        editTodo: (state, action) => {
            const { index, title } = action.payload;
            if (state.todos[index]) {
                state.todos[index].title = title;
            }
        },
    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

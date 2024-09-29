import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from './config/reducers/todoSlice';

const App = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const selector = useSelector(state => state.todos?.todos || []);

    const addTask = (event) => {
        event.preventDefault();
        if (!ref.current.value) {
            alert("Please enter Todo");
            return;
        }
        dispatch(addTodo({ title: ref.current.value }));
        ref.current.value = "";
    };

    const editedTodo = (index) => {
        const newTodo = prompt("Enter new edited Todo:");
        if (newTodo) {
            dispatch(editTodo({ title: newTodo, index }));
        }
    };

    const delTodo = (index) => {
        dispatch(removeTodo({ index }));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-600 to-cyan-400 p-6">
            <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg text-center md:text-6xl">Todo App</h1>
            <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-10">
                <input 
                    type='text' 
                    placeholder='Add a new task...' 
                    ref={ref} 
                    className="flex-1 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out shadow-md bg-white placeholder-gray-400 text-lg"
                />
                <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-green-400 transition-all duration-300 ease-in-out text-lg">
                    Add Task
                </button>
            </form>

            <ul className="w-full max-w-lg space-y-6">
                {selector.length > 0 ? (
                    selector.map((item, index) => (
                        <li 
                            key={item.id} 
                            className="flex justify-between items-center p-5 bg-white shadow-lg rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
                        >
                            <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => editedTodo(index)} 
                                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-300 transition-all duration-300 ease-in-out text-lg"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => delTodo(index)} 
                                    className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-500 focus:ring-2 focus:ring-red-300 transition-all duration-300 ease-in-out text-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <h1 className="text-center text-3xl text-white font-semibold">No Tasks Found!</h1>
                )}
            </ul>
        </div>
    );
};

export default App;

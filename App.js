import React from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="todoapp">
   <h1>Todo App</h1> 
     <TodoList></TodoList>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Todolist from './components/Todolist'

const App = ()=>{
    return (
        <div className="todo-app">
        <h3>Welcome to keep's..Which keep Your Notes Secure at your end</h3>
        <Todolist />
        </div>
    );
}

export default  App;
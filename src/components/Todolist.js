import React, { useState,useEffect } from 'react'
import Input from './Input';
import Todo from './Todo';

const Todolist = ()=>{
    const [todos,setotdos] = useState([]);

    useEffect(() => {
    
        if(localStorage.keeps != undefined){
           const d = JSON.parse(localStorage.keeps)
            setotdos(d);
        }
    }, [])

    const adddatatoLocalstorage = (data)=>{
        console.log(data); 
       localStorage.keeps = JSON.stringify(data);
    }
    
    const addtodo = (todo)=>{
        if(todo.textval){
            const newTodos = [todo,...todos];
            setotdos(newTodos);
            adddatatoLocalstorage(newTodos)
        }else{
            alert("enter the text")
        }
    };

    
    const CompleteTodo = (id)=>{
        let updatedtodos = todos.map(todo => {
            if(todo.id === id){
                 todo.isCompleted = !todo.isCompleted
            }
            return todo;
        })
        setotdos(updatedtodos);
        adddatatoLocalstorage(updatedtodos)
    }

    const updatetodo = (id,newval)=>{
        if(newval.textval){
            setotdos(prev => prev.map(item => (item.id === id ? newval:item) ));
        }else{
            alert("enter the text")
        }
    }

    const removeTodo = (id)=>{
         let removearr = [...todos].filter(todo => {
             return todo.id !== id
         })
         setotdos(removearr);
         adddatatoLocalstorage(removearr)
    }

    return(
        <div>
            <h1>What's the plans for Today</h1>
            <Input onSubmit={addtodo} />
            <div className="todolistcontainer">
            <Todo todos={todos} CompleteTodo={CompleteTodo} removeTodo={removeTodo} updatetodo={updatetodo} />
            </div>
        </div>
    );
}

export default  Todolist;

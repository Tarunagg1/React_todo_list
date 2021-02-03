import React, { useState } from 'react'
import Input from './Input';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const Todo = ({todos,CompleteTodo,removeTodo,updatetodo})=>{

    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = (value)=>{
        updatetodo(edit.id,value);
        setEdit({
            id:null,
            value:''
        });
    };

    if(edit.id){
        return <Input edit={edit} onSubmit={submitUpdate}></Input>
    }

        return todos.map((todo,index)=>(
            <div className={Todo.isCompleted ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={()=> CompleteTodo(todo.id)}>
                    {todo.textval}
                </div>
                <div className="icons">
                    <RiCloseCircleLine className='delete-icon' onClick={()=> removeTodo(todo.id)} />
                    <TiEdit onClick={()=> setEdit({id:todo.id,value:todo.textval})} className='edit-icon' />
                </div>
            </div>
        ));
}
export default Todo;
import React,{useState,useEffect,useRef} from 'react'

export default function Input(props) {
    const [input,setinput] = useState(props.edit ? props.edit.value : '');

    const inputref = useRef(null);

    useEffect(()=>{
        inputref.current.focus();
    })
    
    const handelchange = (e)=>{
        setinput(e.target.value);
    }

    
    const handelsubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            textval:input
        });
        setinput('');
    }

    return (
            <form onSubmit={handelsubmit} className="todo-list">
                 {
                     props.edit ? (<><input type="text" placeholder="Update the Todo" onChange={handelchange} name="text" className="todo-input edit" value={input} ref={inputref} />
                <button className="todo-button edit">Update</button> </>) : (<>
                    <input type="text" placeholder="Enter the Todo" onChange={handelchange} name="text" className="todo-input" value={input} ref={inputref} />
                <button className="todo-button">Add Note</button>
                </>)
                 }
            </form>      
    )
}

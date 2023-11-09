import React, { useState } from 'react'
import { add_to_list,delete_from_list, edit } from '../redux/ActionsCreators/Todocreators'
import { useSelector, useDispatch  } from 'react-redux'

 const Main = () =>{
    const [todo,setTodo] = useState("");
    const todoArr = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const [editid,setEditid] = useState(0)
    // let length = todoArr.length
    
    function AddTodo(e){
        e.preventDefault()
        if(todo){
            if(!editid){
                const newId = Date.now();
                dispatch(add_to_list({id:newId,title:todo}))
                setTodo("")
            }
            else{
                dispatch(edit({id:editid, title:todo}))
                setEditid(0)
                setTodo("")
            }
        }
      
        
    } 

    function handleEdit(id,title){
        setTodo(title)
        setEditid(id)
    }

    return (

        <div className='ToDoApp'>
            <form className='todoform'>
                <h1>To Do List</h1>
                <div className='inpt-btn'>
                    <input type='text' value={todo}  onChange={e =>setTodo(e.target.value)}></input>
                    <button onClick={AddTodo}>Add toDo</button>
                </div>
                
            </form>
        <ul className='todoList'>
            {
                todoArr.map((ele)=>(
                <li key={ele.id}>
                    <span>{ele.title}</span>
                    <button onClick={()=>dispatch(delete_from_list(ele.id))}>delete</button>
                    <button onClick={()=> handleEdit(ele.id, ele.title)}>edit</button>
                </li>
                
               ))
            }
        </ul>    
        </div>
    )
 }
 export default Main
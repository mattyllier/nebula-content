import {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from '../TodoForm/TodoForm'

export default function Todos({todos,completeTodo,removeTodo,updateTodo}){
    const [edit,setEdit] = useState({
        id: null,
        value: '' 
    })
    console.log(todos)
    const submitUpdate = (newTodo)=>{
        updateTodo(edit.id, newTodo)
        setEdit({
            id: null,
            value: ''
        })
    }
    if(edit.id) return <TodoForm onSubmit={submitUpdate}/>
    else {
    return (
        todos.map((todo,i)=>{
            return (
            <div className={todo.isComplete ? 'todoRow complete' : 'todoRow'} key={i}>
                <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                 {todo.text}   
                </div>
                <div className='icons'>
                    <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='deleteIcon'/>
                    <TiEdit onClick={()=>setEdit({id: todo.id, value: todo.text})} className='editIcon'/>
                </div>
            </div>
            )
        })
    )
    }
}
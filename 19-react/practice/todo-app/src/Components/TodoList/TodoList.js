import {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todos from '../Todos/Todos'
import {BsFillFileArrowUpFill} from 'react-icons/bs'
import {BsFillFileArrowDownFill} from 'react-icons/bs'

export default function TodoList(){
    const [todos,setTodos] = useState([])
    const addTodo = (todo)=>{
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(`New Todo: ${todo} \nOldTodos: ${todos}`)
    }
    const removeTodo = (id)=>{
        const removeArr = todos.filter(todo=>todo.id!==id)
        setTodos(removeArr)
    }
    const updateTodo = (todoId, newValue)=>{
       setTodos(prev=>prev.map(item=>item.id===todoId ? newValue : item)) 
    }
    const completeTodo=(id)=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id===id) todo.isComplete = false
            return todo
        })
        setTodos(updatedTodos)
    }
    const sortAsc=(todos)=>{
        const sorted = [...todos].sort((a,b)=>a.text.localeCompare(b.text))
        setTodos(sorted)
    }
    const sortDesc=(todos)=>{
        const sorted = [...todos].sort((a,b)=>b.text.localeCompare(a.text))
        setTodos(sorted)
    }

    return (
        <div>
            <h1 className='header'>What needs to be done today?</h1>
            <BsFillFileArrowUpFill className='todoButton sortButton' onClick={()=>sortAsc(todos)}>Ascending</BsFillFileArrowUpFill>
            <BsFillFileArrowDownFill className='todoButton sortButton' onClick={()=>sortDesc(todos)}>Descending</BsFillFileArrowDownFill>
            <TodoForm onSubmit={addTodo}/>
            <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

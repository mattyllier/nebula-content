import {useState, useEffect, useRef} from 'react'

export default function TodoForm(props){
    const [input,setInput] = useState('')
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onSubmit({
            input: Math.floor(Math.random()*1000000),
            text: input
        })
        setInput('')
    }
    return (
        <form className='todoForm' onSubmit={handleSubmit}>
            <input className='todoInput' type='text' value={input} name='text' placeholder='Enter a todo' onChange={handleChange} ref={inputRef}/>
            <button className='todoButton'>Add Todo</button>
        </form>
    )
}
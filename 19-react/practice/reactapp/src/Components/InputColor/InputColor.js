import React, {useState} from 'react'

function InputColor(){
const [color,setColor] = useState('')
const handleSubmit= (e)=>{
    e.preventDefault()
    alert(`This is my favorite color: ${color}`)
}
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Color:</label>
            <input type='text' value={color} onChange={(e)=>setColor(e.target.value)}/>
            <input type='submit'/>
        </form>
    )
}

export default InputColor
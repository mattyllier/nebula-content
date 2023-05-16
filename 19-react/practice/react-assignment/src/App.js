import './App.css';
import React, {useState} from 'react'
import About from './Components/About/About'
import Hobbies from './Components/Hobbies/Hobbies'
import Goals from './Components/Goals/Goals'

function App() {
const [about,setAbout] = useState('')
const [hobbies,setHobbies] = useState('')
const [goals,setGoals] = useState('')


function handleSubmit(e){
  setAbout(e.target.value)
  setHobbies(e.target.value)
  setGoals(e.target.value)
}

  return (
    <div>
    <label>About: </label>
    <input type='text' name='about' value={about} onChange={(e)=>setAbout(e.target.value)} onSubmit={(e)=>handleSubmit()}/>
    <input type='submit'/>
    <About/>
    <label>Hobbies: </label>
    <input type='text' name='hobbies' value={hobbies} onChange={(e)=>setHobbies(e.target.value)}/>
    <input type='submit'/>
    <Hobbies/>
    <label>Goals: </label>
    <input type='text' name='goals' value={goals} onChange={(e)=>setGoals(e.target.value)}/>
    <input type='submit'/>
    <Goals/>
    </div>
  );
}

export default App;

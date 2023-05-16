import React, {useState} from 'react'
import './App.css';
import Counter from './Components/Counter/Counter.js'
import InputColor from './Components/InputColor/InputColor'
import DisplayName from './Components/DisplayName/DisplayName'

function App() {
  const [firstName,setFirstName] = useState('')

  function handleChange(e){
    setFirstName(e.target.value)
  }
  return (
    <div className="App">
     <h1>This is my first React App!!!!!</h1>
     <Counter/>
     <InputColor/>
     <DisplayName firstName = {firstName}/>
     <label>
      First Name: 
      <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
     </label>
    </div>
  );
}

export default App;

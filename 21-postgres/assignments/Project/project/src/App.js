import {useState} from 'react'
import Plate from './Components/Plate/Plate'
import './App.css';

function App() {
  const [combination, setCombination] = useState('')
  const handleSubmit = (e)=>{
    setCombination(e.target.value)
  }
  return (
    <div className="App">
      <input type='submit' className='input' placeholder='Submit a New High' onSubmit={handleSubmit}/>
      {/* <button className='button' onClick={(e)=>setCombination(e.target.value)}>Submit</button> */}
      <Plate state='Illinois' combination={combination}/>
    </div>
  );
}

export default App;

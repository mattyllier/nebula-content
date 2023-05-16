import './App.css';
import {useState} from 'react'
import About from './Components/About/About'
import Hobbies from './Components/Hobbies/Hobbies'
import Goals from './Components/Goals/Goals'

function App() {
  // const [x,setX] = useState('')
  // const [y,setY] = useState(0)
  // const [hobby1,setHobby1] = useState('')
  // const [hobby2,setHobby2] = useState('')
  // const [hobby3,setHobby3] = useState('')
  // const [goal1,setGoal1] = useState('')
  // const [goal2,setGoal2] = useState('')
  // const [goal3,setGoal3] = useState('')
  const [values,setValues] = useState({})
  const [showInfo,setShowInfo] = useState(false)

const handleOnChange = (e)=>{
  setValues({...values,[e.target.name] : e.target.value})  //useState is immutable, instead of values[e.target.name] = e.target.value
}

function handleSubmit(e){
  e.preventDefault()
  setShowInfo(true)
//   setAbout(e.target.value)
//   setHobbies(e.target.value)
//   setGoals(e.target.value)
}

  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Enter Name: </label>
        <input type='text' required value={values.x} name='x' onChange={handleOnChange}/>
        <label>Enter Age: </label>
        <input type='text' required value={values.y} name='y' onChange={handleOnChange}/>
      <label>Enter hobby1: </label>
      <input type='text' required value={values.hobby1} name='hobby1' onChange={handleOnChange}/>
      <label>Enter hobby2: </label>
      <input type='text' required value={values.hobby2} name='hobby2' onChange={handleOnChange}/>
      <label>Enter hobby3: </label>
      <input type='text' required value={values.hobby3} name='hobby3' onChange={handleOnChange}/>
      <label>Enter goal1: </label>
      <input type='text' required value={values.goal1} name='goal1' onChange={handleOnChange}/>
      <label>Enter goal2: </label>
      <input type='text' required value={values.goal2} name='goal2' onChange={handleOnChange}/>
      <label>Enter goal3: </label>
      <input type='text' required value={values.goal3} name='goal3' onChange={handleOnChange}/>
      <input type='submit'/>
    </form>
    <div className='display'>
      {showInfo ? 
      <>
      <About x={values.x} y={values.y}/>
      <Hobbies hobby1={values.hobby1} hobby2={values.hobby2} hobby3={values.hobby3}/>
      <Goals goal1={values.goal1} goal2={values.goal2} goal3={values.goal3}/>
      </>
      :null}
    </div>
    </div>
  );
}

export default App;

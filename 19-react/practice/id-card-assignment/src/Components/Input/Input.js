import {useState} from 'react'
import Display from '../Display/Display'
import './Input.css'

export default function Input(){
    const [values, setValues] = useState({firstName: '', age: '', location: '', profession: ''})
    const [showInfo,setShowInfo] = useState(false)
    const [users, addUser] = useState([])

    const handleOnChange = (e)=>{
        setValues({...values,[e.target.name] : e.target.value})
        console.log(values)
    }
    function handleSubmit(e){
        e.preventDefault()
        setShowInfo(true)
        addUser([values, ...users])
        console.log(users)
    }

    return (
        <>
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className ='field'>
                <label>Enter Name: </label>
                <input type='text' className='input' required value={values.firstName} name='firstName' onChange={handleOnChange}/>
                </div>
                <div className ='field'>
                <label>Enter Age: </label>
                <input type='text' className='input' required value={values.age} name='age' onChange={handleOnChange}/>
                </div>
                <div className = 'field'>
                <label>Enter Location: </label>
                <input type='text' className='input' required value={values.location} name='location' onChange={handleOnChange}/>
                </div>
                <div className = 'field'>
                <label>Enter Profession: </label>
                <input type='text' className='input' required value={values.profession} name='profession' onChange={handleOnChange}/>
                </div>
                <input type='submit' className='button'/>
            </form>
        </div>
        <div className='user'>
        {showInfo ? 
        users.map((user,i)=><Display key={i} firstName={user.firstName} age={user.age} location={user.location} profession={user.profession}/>)
        : null}
        </div>
        </>
    )
}
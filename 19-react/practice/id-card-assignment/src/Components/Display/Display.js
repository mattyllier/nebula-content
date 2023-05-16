import './Display.css'

export default function Display({firstName,age,location,profession}){
       return (
       <div className='display'>
        <h1 className='field'>{firstName}</h1>
        <h3 className='field'>Age {age}</h3>
        <h3 className='field'>Location: {location}</h3>
        <h3 className='field'>Profession: {profession}</h3>
       </div>
       )
}

/* <h1>{item.firstName}</h1>
<h4>{item.age}</h4>
<h4>{item.location}</h4>
<h4>{item.profession}</h4> */
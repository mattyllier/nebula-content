import {Link} from 'react-router-dom'

export default function Contact(){
    return (
        <>
            <Link to='/'><button className='todoButton'>Back</button></Link>
            <div className='contact'>
                Contact
            </div>
        </>
    )
}
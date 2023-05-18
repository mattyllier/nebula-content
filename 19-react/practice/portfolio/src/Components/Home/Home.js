import {Link} from 'react-router-dom'
import './Home.css'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'


function Home(){
    return (
        <div>
        <div className='navBar'>
                <Link to='about' element={<About/>}><button className='button'>About</button></Link>
                <Link to='projects' element={<Projects/>}><button className='button'>Projects</button></Link>
                <Link to='resume' element={<Resume/>}><button className='button'>Resume</button></Link>
                <Link to='contact' element={<Contact/>}><button className='button'>Contact</button></Link>
            </div>
            <div className='homeContainer'>
                    <h1 className='homeTitle'>Home</h1>
                </div>
        </div>
    )
}


export default Home;
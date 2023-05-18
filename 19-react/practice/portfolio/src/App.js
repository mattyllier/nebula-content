import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='resume' element={<Resume/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;

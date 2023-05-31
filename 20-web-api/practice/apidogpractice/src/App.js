import './App.css';
import {useState, useEffect} from 'react'
import DogCard from './Components/DogCard/DogCard'
import Search from './Components/Search/Search'

function App() {
  const [dogs,setDogs] = useState([])
  const [options, setOptions] = useState([])
  const [dropValue, setDropValue] = useState('')
  //const [getData, setGetData] = useState(false)

  const handleChange=(e)=>{
    e.preventDefault()
    setDropValue(e.target.value)
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
    .then(res => res.json())
    .then(res => setDogs(res.message))

  }
  useEffect(()=>{
    fetch('https://dog.ceo/api/breed/sheepdog/images')
      .then(res=>res.json())
      .then(res=>setDogs(res.message))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(res=>{
      let arr = []
      for(let key in res.message){
        arr.push(key)
      }
      setOptions(arr)
    })
   // .then(res=>setDogs(Object.keys(res.message)))
  },[])

  return (
    <div className="App">
      <h1>Dog API</h1>
      <Search handleChange={handleChange} options={options} dropValue={dropValue}/>
      {/* <button onClick={()=>setGetData(!getData)}>Get Dogs</button> */}
      {dogs.map(dog=><DogCard className='img' dog={dog} key={dog}/>)}
    </div>
  );
}

export default App;

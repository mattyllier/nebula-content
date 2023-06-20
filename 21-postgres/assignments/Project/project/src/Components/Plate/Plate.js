import './Plate.css'
import Combinations from '../Combinations/Combinations'
import {useState, useEffect} from 'react'
// import Img from '..../'

export default function Plate(props){
  //  const [combination, setCombination] = useState('')
    return (
        <div className='plate'>
            {/* <img src={Img}></img> */}
            <h1>{props.state}</h1>
        </div>
    )
}
import {useState} from 'react'
import ListItem from '../ListItem/ListItem.js'

export default function GroceryList(){
    const [list,setList] = useState([{name:'Banana', count: 2},{name: 'Apple', count: 5},{name: 'Guava', count: 8}])
   // const listArr = list.map(item=> <h1>{item}</h1>)

    return (
        <div className ='groceryList'>
            <h1>Grocery List:</h1>
            {list.map((item,i)=>{
                return (
                <ListItem key={i} item={item}/>
                )
            })}  
        </div>
    )
}
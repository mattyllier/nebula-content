export default function ListItem({item}){
    return (
        <div className ='groceryList'>
                <div className = 'listItem'>
                  <h1>{item.name}: {item.count}</h1>
                </div> 
        </div>
    )
}
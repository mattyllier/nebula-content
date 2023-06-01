import Tile from '../Tile/Tile.js'

export default function Search(props){
    return (
        <div className='container'>
          <input
            type='search'
            value={props.name}
            onChange={props.handleChange}
            className='input'
            placeholder='filter'
            >
            </input>
            <Tile/>
        </div>
    )
}
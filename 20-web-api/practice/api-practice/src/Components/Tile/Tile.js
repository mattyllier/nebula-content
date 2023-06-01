import './Tile.css'

export default function Tile({results, name, tile}){
    return (
        <>
        {results.map(x=><div><h1 className='title'>{name}</h1><img src={tile} alt='tile' className='tile'/></div>)}
        </>
    )
}
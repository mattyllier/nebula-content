export default function Search(props){
    return (
        <>
        <select onChange={e=>props.handleChange(e)} value={props.dropValue}>
            <option defaultValue>Select an Option</option>
            {props.options.map(dog=><option key={Math.random(1)*100000} value={dog}>{dog}</option>)}
        </select>
        </>
    )
}
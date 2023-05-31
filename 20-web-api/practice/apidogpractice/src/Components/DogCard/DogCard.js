export default function DogCard(props){
    return (
        <div className='dogCard'>
            <img src={props.dog} alt={props.dog}/>
        </div>
    )
}
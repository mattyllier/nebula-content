export default function Goals({goal1,goal2,goal3}){
    return (
        <div className = 'goals'>
        <ul>
          <li>{goal1}</li>
          <li>{goal2}</li>
          <li>{goal3}</li>
        </ul>
      </div>
    )
}
//import React from 'react'

export default function DisplayCounter(props) {
    const {count} = props
    return (
    <div>
        <p>You Clicked {count} Times</p>
    </div>
  );
}

//or DisplayCounter{count}
//or DisplayCounter(props)  <p>You Clicked {props.count} Times</p>
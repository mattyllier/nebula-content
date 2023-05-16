import { useState, useEffect } from 'react';
import DisplayCounter from '../DisplayCounter/DisplayCounter';

export default function Counter() {
  const [count, setCount] = useState(0);
useEffect(()=>{
  document.title = `You Clicked ${count} Times`
},[count])
  return (
    <div>
      <DisplayCounter count={count}/>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


/*
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.counter = this.counter.bind(this);
  }

  counter() {
    // We can't set state with a previous state so you'd have to temporarily store the previous state
    const currentCount = this.state.count;
    // Set state with the previous state, plus 1
    this.setState({count: currentCount + 1});
    // Note that we couldn't say this.state.count = this.state.count+1
    // That would cause all sorts of issues
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.counter}>Click me</button>
      </div>
    );
  }
}
*/

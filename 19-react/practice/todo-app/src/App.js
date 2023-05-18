import TodoList from './Components/TodoList/TodoList'
import './App.css'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;

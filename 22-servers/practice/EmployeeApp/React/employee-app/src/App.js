//import {Tile} from './Components/Tile/Tile';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [employees, setEmployees] = useState([])
  const [newEmployee, setNewEmployee] = useState({employee_name: '', employee_id: '', date_hired: '', city_id: ''});
  const [update, setUpdate] = useState({})
  const [hidden, setHidden] = useState(true);

  useEffect(()=>{
    getData()
  },[])
  const getData = () =>{
    fetch('http://localhost:3030/employees')
    .then(res=>res.json())
    .then(res=>setEmployees([...res]))
  }
  const deleteEmployee = (id)=>{
    fetch(`http://localhost:3030/employee/${id}`, {
      method: 'DELETE',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    .then(res=>res.json())
    .then(()=>getData())
  }
  const addEmployee = ()=>{
    fetch(`http://localhost:3030/employees`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
    .then(res=>res.json())
    .then(()=>{getData(); setNewEmployee({employee_name: '',employee_id:'',date_hired:'',city_id:''})
  })
  setHidden(!hidden)
  }
  const completeUpdate = (employee)=>{
    fetch(`http://localhost:3030/employees`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(employee)
    })
    .then(res=>res.json())
    .then(()=>getData())
    .then(()=>updateEmployee())
  }
  const updateEmployee = (id)=>{
    const newUpdate = {...update};
    for(let employee in employees){
      newUpdate[employees[employee].id] = false;
    }
    setUpdate(newUpdate);
    if(id!==undefined){setUpdate({...newUpdate, [id]: !update[id]})}
  }
  const updateEmployeeInfo = (employee,e)=>{
    employee[e.target.getAttribute('field')]=e.target.value
    for(let i in employees){
      if(employee.id===employees[i].id){
        let updatedEmployees = [...employees]
        updatedEmployees[i] = employee
        setEmployees([...updatedEmployees])
      }
    }
  }
  return (
    <div className="App">
      <header className='header'>
        {employees.map((employee)=>{
          return (!update[employee.id]?
            <div className='employeeCard' key={employee.id}>
              <h3>{employee.employee_name}</h3>
              <p>{employee.employee_id}</p>
              <p>{employee.date_hired}</p>
              <p>{employee.city_id}</p>
              <button onClick={(()=>
              updateEmployee(employee.id))}>Update</button>
              <button onClick={(()=>
              deleteEmployee(employee.id))}>Delete</button>
            </div>
            :
            <div className='employeeCard' key={employee.id}>
              <input defaultValue={employee.employee_name} field='employee_name' placeholder='employee_name' onChange={((e)=>updateEmployeeInfo(employee,e))}/>
              <input defaultValue={employee.employee_id} field='employee_id' placeholder='employee_id' onChange={(e)=>updateEmployeeInfo(employee,e)}/>
              <input defaultValue={employee.date_hired} field='date_hired' placeholder='date_hired' onChange={(e)=>updateEmployeeInfo(employee,e)}/>
              <input defaultValue={employee.city_id} field='city_id' placeholder='city_id' onChange={(e)=>updateEmployeeInfo(employee,e)}/>
              <button onClick={()=>{updateEmployee(employee.id)
              getData()}}>Cancel</button>
              <button onClick={()=>
              completeUpdate(employee)}>Update</button>
            </div>
          )
        })}
        {hidden ?
        <button onClick={()=>setHidden(!hidden)}>Add New Item</button>:
        <div className='employeeCard'>
          <h3>Employee Name:&nbsp;<input onChange=
          {(e)=>setNewEmployee({...newEmployee,employee_name: e.target.value})} value={newEmployee.employee_name} placeholder='employee_name'/></h3>
          <br/>
          <p>Employee Id:&nbsp;<input onChange=
          {(e)=>setNewEmployee({...newEmployee,employee_id: e.target.value})} value={newEmployee.employee_id} placeholder='employee_id'/></p>
          <br/>
          <p>Date Hired:&nbsp;<input onChange=
          {(e)=>setNewEmployee({...newEmployee, date_hired: e.target.value})} value={newEmployee.date_hired} placeholder='date_hired'/></p>
          <br/>
          <p>City Id:&nbsp;<input onChange=
          {(e)=>setNewEmployee({...newEmployee, city_id: e.target.value})} value={newEmployee.city_id} placeholder='city_id'/></p>
          <br/>
          <button onClick={()=>addEmployee()}>Submit</button>
          </div>}
      </header>
    </div>
  );
}

export default App;

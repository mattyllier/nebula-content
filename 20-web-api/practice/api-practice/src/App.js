
import './App.css';
//import Person from './Components/Person/Person'
import LanguageList from './Components/LanguageList/LanguageList'

function App() {
  // const json = `{
  //   "employees":[
  //       {
  //         "name": "Micheal Scott",
  //         "username": "M-Scott",
  //         "city": "Scranton",
  //         "state": "Pennsylvania", 
  //         "online": false,
  //         "position": "manager",
  //         "age": 31
  //       }, 
  //       { 
  //         "name": "Dwight Schrute",
  //         "username": "D-Schrute",
  //         "city": "Scranton",
  //         "state": "Pennsylvania", 
  //         "online": true,
  //         "position": "assistant to the regional manager",
  //         "age": 31
  //       },
  //       {
  //         "name": "James Halpert",
  //         "username": "J-Halpert",
  //         "city": "Scranton",
  //         "state": "Pennsylvania", 
  //         "online": false,
  //         "position": "Sales Lead",
  //         "age": 31
  //       },
  //       {
  //         "name": "Toby Flenderson",
  //         "username": "T-Flenz",
  //         "city": "Scranton",
  //         "state": "Pennsylvania", 
  //         "online": true,
  //         "position": "HR",
  //         "age": 31
  //       }
  //   ]
  // }`
  const myJson = `{
    "languages":[
      {
        "name": "Java",
        "img": "https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png",
        "version": "JDK17",
        "isInUse": true
      },
      {
        "name": "JavaScript",
        "img": "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png",
        "version": "ES6",
        "isInUse": true
      },
      {
        "name": "C",
        "img": "https://www.techbaz.org/Course/img/c-logo.png",
        "version": "C17",
        "isInUse": true
      },
      {
        "name": "Python",
        "img": "http://www.pngmart.com/files/7/Python-PNG-File.png",
        "version": "3.11.3",
        "isInUse": true
      },
      {
        "name": "Ruby",
        "img": "https://seeklogo.net/wp-content/uploads/2016/07/ruby-vector-logo.png",
        "version": "3.3.0",
        "isInUse": true
      }
    ]
  }`
  //const data = JSON.parse(json)
  const myData = JSON.parse(myJson)
  console.log(myData)
  // const employeeList = data.employees.map(person=>{
  //     return <Person className='person' key={person.username} name={person.name} city={person.city}/>
  //   })
  return (
    <>
    {/* <h1>Data</h1>
    {employeeList} */}
    <LanguageList data={myData}/>

    </>
  );
}

export default App;

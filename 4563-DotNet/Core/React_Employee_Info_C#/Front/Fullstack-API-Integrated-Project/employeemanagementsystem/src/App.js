import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/Employee';
import UpdateEmployee from './Components/UpdateEmployee';
import GetEmployeeComp from './CRUD/GetEmployeeComp';
// import EmployeeServices from './Services/EmployeeServices';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    // <h1>Employee Management System</h1>
    // <AddEmployee/>
    // <EmployeeList/>
    // </div>
    <Router>
            <div className="container">
                <h1 className="text-center mt-4">Employee Management System</h1>
                <Routes>
                    <Route path="/" element={<GetEmployeeComp />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route path="/editemployee/:id" element={<UpdateEmployee />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;

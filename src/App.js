import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import AddEmpComponent from './components/AddEmpComponent';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    <Router>
      <div className='container'>

      <Routes>
        <Route exact path="/" element={<EmployeeComponent/>}></Route>
        <Route path="/emps" element={<EmployeeComponent/>}></Route>
        <Route path="/addEmp" element={<AddEmpComponent />}></Route>
        <Route path = "/editEmp/:id" element = {<AddEmpComponent/>}></Route>
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
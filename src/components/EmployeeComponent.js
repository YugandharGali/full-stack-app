import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeComponent() {

  const [employees, setEmployee] = useState([]);
  
  useEffect(()=>{
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getEmployees().then((response) =>{
        setEmployee(response.data);
        console.log(response);
    });
  }

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
     getAllEmployees();
    }).catch(error =>{
        console.log(error);
    })   
 }

  return (
    <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to = "/addEmp" className = "btn btn-primary mb-2" > Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Emp Id </th>
                    <th> Emp First Name </th>
                    <th> Emp Last Name </th>
                    <th> Emp Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/editEmp/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default EmployeeComponent;
import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import {DELETE, GET} from '../Services/HttpService';


function GetEmployeeComp() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        GET("/api/Employee").then((res) => {
            console.log(res);
            setEmployees(res);
        }).catch((error) => { })
    }

    const deleteFun = (id) => {
        // window.alert(`Delete button clicked ${id}`);
        let conf = window.confirm("Do you want to Delete it");
        conf && DELETE(`/api/Employee/${id}`).then(() => {
            getData();
        }).catch((error) => { });
    }

    return (
        <div>
            <h2>Employees</h2>
            <Link to="addemployee" className='btn btn-primary mt-3 mb-3'>
                Add
            </Link>

            <table className='table table-hover table-bordered table-striped'>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map((val, index) => {
                            return <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.location}</td>
                                
                                <td>
                                    <Link to={`editemployee/${val.id}`} className='btn btn-outline-success' >
                                        Edit
                                    </Link>
                                </td>
                                <td>

                                    <button type='button' onClick={() => { deleteFun(val.id) }} className='btn btn-outline-danger'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>

        
    )
}

export default GetEmployeeComp;


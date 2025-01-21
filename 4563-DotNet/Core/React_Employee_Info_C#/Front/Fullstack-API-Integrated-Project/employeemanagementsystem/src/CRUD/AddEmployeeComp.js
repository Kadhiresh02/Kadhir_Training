import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { POST } from '../Services/HttpService';

function AddEmployeeComp() {
    const nav = useNavigate();
    const[url, setUrl] = useState("http://localhost:5169/api/Employee");

    const [employee, setEmployee] = useState({
            id:"",
            name:"",
            location:""
        })

    const handleChange =(event)=> {
        const {name, type, value} = event.target;
        setEmployee({...employee, [name]:value});
    }

    const submitData = (event) => {
        event.preventDefault();
        
        POST(url, employee).then(()=>{
            window.alert("Added Successfully");
            nav("/");
        }).catch((error)=>{});
    }



    return (
        <div>
            {/* <h2>This is ProductAddComp</h2> */}

            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={submitData}>
                    <div className='p-2'>
                            <label>Id </label>
                            <input type="text" className="form-control" name='id' value={employee.id} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Name  </label>
                            <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange}></input>
                        </div>

                        <div className='p-2'>
                            <label>Location </label>
                            <input type="text" className="form-control" name='location' value={employee.location} onChange={handleChange}></input>
                        </div>

                        {/* <div className='p-2'>
                            <label>End Location </label>
                            <input type="text" className="form-control" name='endLocation' value={reservation.endLocation} onChange={handleChange} ></input>
                        </div> */}

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
            
        </div>
    )
}

export default AddEmployeeComp;
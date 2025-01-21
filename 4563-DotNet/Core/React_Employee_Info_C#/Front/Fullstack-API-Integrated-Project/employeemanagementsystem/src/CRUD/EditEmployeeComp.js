import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GET, PUT } from '../Services/HttpService';

function EditEmployeeComp() {

    const {id} = useParams();
    const nav = useNavigate();

    const[url, setUrl] = useState("http://localhost:5169/api/Employee");
    const [employee, setEmployee] = useState({
        id:"",
        name:"",
        location:""
    })

    useEffect(()=>{
        GET(`/api/Employee/${id}`).then((res)=>{
            setEmployee({...employee, ...res});
        }).catch((error)=>{});
    },[])

    const handleChange =(event)=> {
        const {name, type, value} = event.target;
        setEmployee({...employee, [name]:value});
    }

    // const submitEdit = (event) => {
    //     event.preventDefault();
    //     axios.put(`http://localhost:5048/api/Reservation/${reservation.id}`, reservation)
    //     .then(() => {
    //         window.alert("Edit Successful");
    //         nav("/");
    //     })
    //     .catch((error) => {
    //         console.error("Error during edit:", error);
    //         window.alert("Failed to edit the reservation");
    //     });
    // };
    const submitEdit = (event) => {
        event.preventDefault();
        PUT(`/api/Employee/${id}`,employee).then(()=>{
            window.alert("Edit Successfull");
        }).catch((error)=>{});
        nav("/");

    }

    return (
        <div>
            <h2>This is Employee Edit</h2>

            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={submitEdit}>
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
                            <input type="text" className="form-control" name='startLocation' value={employee.location} onChange={handleChange}></input>
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

export default EditEmployeeComp;
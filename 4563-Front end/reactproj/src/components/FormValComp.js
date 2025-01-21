import React, { useState } from 'react'

const FormValComp = () => {
    let mycourses=["React","Java","Angular","python","Html"];
    const [user,setUser]=useState({
        fname:"" ,
        term:false,
        course:""
    });
    const changeInput =(event)=>{
        //console.log(event.target.type);
        //console.log(event.target.name);
        //console.log(event.target.value);
        const {type,name,value,checked}=event.target;
        setUser({...user,[name]:type==='checkbox'?checked:value});
    }
    const checkData=(event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}")){
            window.alert("fullname must contain only character min-3 and max-20");
            return false;
        }
        if(user.course==="")
        {
            window.alert("Please select course");
            return false;
        }
        if(user.term===false){
            window.alert("Please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>This is form validation Component</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter tour FirstName:</label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname}/>
                </div>
                <div>
                    <label>Select Your Courses:</label>
                    <select name='course' onChange={changeInput}>
                    <option value="">Select courses</option>
                    {
                        mycourses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                    </select>
                </div>
                <div>
                    <input type='checkbox' name='term' onChange={changeInput} value={user.term} /> Accept the terms and Conditions
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default FormValComp
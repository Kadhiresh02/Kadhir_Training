import React, { useEffect } from 'react'
 
import { useNavigate } from 'react-router-dom'
const ProtectedRouting = ({Component}) => {
    const Nav=useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem("user"))
        {
            Nav("/");
        }
    },[]);
    return (
        <div>
            <h2>This is protected routing</h2>
            <Component/>
        </div>
    )
}

export default ProtectedRouting

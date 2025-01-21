
import React,{useRef} from "react";
import "./login.css";
// import { Outlet } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {GET,POST} from '../shared/services/HTTP.Service';
const LoginComp = () =>{
    const nav=useNavigate();
    const uidRef= useRef();
    const upassRef= useRef();
    
    const checkUser=()=>{
        let uid=uidRef.current.value;
        let upass=upassRef.current.value;
        axios.get("http://localhost:8848/users").then((res)=>{
            // console.log(res.data);
            let currentUser=res.data.filter((val,index)=>{return val.userid===uid && val.userpass===upass})
            if(currentUser.length>0)
            {
                window.alert("login Success");
                sessionStorage.setItem("user",uid);
                nav("/mainDashboard");
            }
            else{
                window.alert("Wrong credetials");
                uidRef.current.value="";
                upassRef.current.value="";
            }
        }).catch((error)=>{})
    }
    return (
        <div className="loginContainer">
            {/* <h2>This is LoginComp!!</h2>
            <Outlet/> */}
            <form className="loginForm">
                <label className="form-label">Enter user Id:</label>
                <input type="text" name="uid" ref={uidRef} className="form-control mb-2 mt-2"></input>


                <label className="form-label">Enter Password:</label>
                <input type="password" name="" ref={upassRef} className="form-control mb-2 mt-2"></input>

                <button type="button" onClick={()=>checkUser()} className="btn btn-success">Login</button>
            </form>
        </div>
    )
}
export default LoginComp;
import { useState } from "react";
import { Outlet } from "react-router-dom";

const UserStateHookComp = (props) =>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Kadhir");
    const incrementCount=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h2>This is UserStateHookComp!!</h2>
             <p>Counter Value :<strong>{count}</strong></p>
             <button type="button" onClick={()=>incrementCount()} className="btn btn-primary">change count</button>{" "}
             <button type="button" onClick={()=>setCount(count+2)} className="btn btn-primary">change count</button>
             <hr/>
             <p>My Name:<strong>{name}</strong></p>
             <button type="button" onClick={()=>setName("Kadhir S") }className="btn btn-secondary">change name</button>
        </div>
    )
}
export default UserStateHookComp;
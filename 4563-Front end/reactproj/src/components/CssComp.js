import React  from "react";
import './external.css';
import mymodule from './mycss.module.css';


const CssComp=()=>{
    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"100px",
        borderRadius:"50%",
        border:"2px solid red",
        margin:"auto"
        
    }
    return (
        <div>
            {/* 1.use of internal css */}
            <h1 style={{color:'blue',backgroundColor:'aqua'}}>This is internal css</h1>
            <p style={circle}>Hi</p>
            {/* use of external css */}
            <div className="txtPrimary">Hello Vinay</div>
            <div className={mymodule.txt1}>Hello Rupesh</div>
        </div>

    )
}
export default CssComp;
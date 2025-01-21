
import React from "react";
import { Outlet } from "react-router-dom";
const FooterComp = (props) =>{
    return (
        <div>
             
            <p className="text-primary" style={{float:"right"}}>This  app is designed by <strong>Kadhiresh</strong> </p>
        </div>
    )
}
export default FooterComp;
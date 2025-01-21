
import React from "react";
import { Link, Outlet } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
const NavComp = (props) =>{
    const Nav=useNavigate();
    const Logout=()=>{
        if(window.confirm("Are you sure logout!"))
        {
            sessionStorage.clear();
            Nav("/");
        }
    }
    return (
        <div>
            {/* <h2>This is NavComp!!</h2> */}
            <Link to="mystate" className="btn btn-success btn-sm"> mystate</Link>{" "}
            <Link to="images/:id" className="btn btn-success btn-sm"> Image</Link>{" "}
            <Link to="hooks" className="btn btn-success btn-sm"> Hooks</Link>{" "}
            <Link to="favcolor" className="btn btn-success btn-sm">Fav color</Link>{" "}
            <Link to="formval" className="btn btn-success btn-sm">Form Validation</Link>{" "}
            <Link to="validation" className="btn btn-success btn-sm">Validation</Link>{" "}
            <Link to="productdash" className="btn btn-success btn-sm">productDash</Link>{" "}
            <button  onClick={()=>Logout()} className="btn btn-danger" style={{float:"right"}}><LogoutIcon/></button>
            <Link to="datalist" className="btn btn-danger btn-sm">Data list</Link>
            <Link to= "productdash2" className="btn btn-success btn-sm">Reservation </Link>
        </div>
    )
}
export default NavComp;
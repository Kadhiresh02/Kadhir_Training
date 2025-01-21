import React from "react";

const ChildComp=(props)=>{
    const {name,sal,manage}=props;
    return (
    <div>
        <p>Name : {name} Salary :{sal}</p>
        <h2 onMouseOver={manage}>Change data</h2>
    </div>        
    );

}
export default ChildComp;
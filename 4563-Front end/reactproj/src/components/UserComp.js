import React from "react";
const UserComp = (props) => {
    if (props.user === "Arun") {
        throw Error("Not a user");

    }
    return (
        <div>
             <h2>user is :{props.user}</h2>
        </div>
    )
}
export default UserComp;
import React from "react";
import lion from '../assets/images/lion.jpg'
import tiger from '../assets/images/tiger.jpg'
import commonData from '../shared/constant/constantData';
const MyimagesComp=()=>{
    return (
        <div>
            <h2>
                This is my Images page
            </h2>
            <img src={lion} alt="Lion" height="200px" width="300px"/>
            <img src={tiger} alt="Lion" height="200px" width="300px"/>
            <hr/>
            <img src={commonData.zebra} alt="Zebra" height="200px" width="300px"/>
            <img src={commonData.elephant} alt="Elephant" height="200px" width="300px"/>
        </div>
    )
}

export default MyimagesComp
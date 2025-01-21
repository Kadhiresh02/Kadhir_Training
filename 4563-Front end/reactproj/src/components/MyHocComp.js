import { render } from "@testing-library/react";
import React, { Component } from "react";

const MyHocComp=(WrapperComp,val)=>{
     class Hoc extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementCounter=()=>{
            this.setState((prevState)=>({count:prevState.count+val}))
        }
        render(){
            return <WrapperComp count={this.state.count} incrementCounter={this.incrementCounter}/>
        }
     }
        return Hoc;
    
}

export default MyHocComp;
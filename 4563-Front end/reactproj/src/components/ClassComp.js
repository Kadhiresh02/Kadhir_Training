import React, {Component} from "react";

class ClassComp extends Component{
    render(){
        return  <h2>I am {this.props.fname} and I am <strong>{this.props.post}</strong></h2>
    }
}
export default ClassComp;
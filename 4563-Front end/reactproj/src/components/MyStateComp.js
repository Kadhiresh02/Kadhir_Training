import React,{Component} from "react";

class MyStateComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"Rupesh",empSal:85000
        }
    }
    changeStateData = ()=>{
       // this.setState({empName:"Rupesh S",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({empName:"Rupesh S",empSal:prevState.empSal+5000}));
    }
    render(){
        return (
            <div>
                <h2>This is MyStateComp</h2>
                <p>Employee Name :<strong>{this.state.empName}</strong> and salary: <strong>{this.state.empSal}</strong></p>
                <button type="button" className="btn btn-primary" onClick={()=>this.changeStateData()}>Change state Data</button>
            </div>
        );
    }
}
export default MyStateComp;
import React,{Component, Fragment} from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import MyMemoComp from "./MyMemoComp";


class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state={
            empName:"Rupesh",empSal:85000
        }
    }
    changeStateData = ()=>{
       // this.setState({empName:"Rupesh S",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({empName:prevState.empName="Rupesh S",empSal:prevState.empSal+5000}));
    }
    render(){
        const {empName,empSal}=this.state;
        const {gender,contact}=this.props;
        return (
            
            <Fragment>
                
                {/* <p>Employee Name :<strong>{this.state.empName}</strong> and salary: <strong>{this.state.empSal}</strong></p> */}
                <p>Employee Name :<strong>{empName}</strong> and salary: <strong>{empSal}</strong></p>
                {/* <p>Gender:<stron>{this.props.gender} </stron>Contact:<strong>{this.props.contact}</strong></p> */}
                <p>Gender:<strong>{gender} </strong>Contact:<strong>{contact}</strong></p>
                <button type="button" className="btn btn-primary" onClick={()=>this.changeStateData()}>Change state Data</button>
                <hr/>
                <ChildComp name={empName} sal={empSal} manage={this.changeStateData}/>
                <hr/>
                <MyPureComp empName={empName}></MyPureComp>
                <hr/>
                <MyMemoComp empName={empName}/>
            </Fragment>
            

        );
}
}
export default ParentComp;
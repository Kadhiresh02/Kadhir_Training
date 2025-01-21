import React,{Component} from "react";
class CounterTask extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    count1=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
    count2=()=>{
        this.setState((prevState)=>({count:prevState.count-1}));
    }
    count3=()=>{
        this.setState((prevState)=>({count:prevState.count=0}));
    }
    render(){
        return (
            
            <div>
                <h1>Counter Task</h1>
                <h4>Counter:<strong>{this.state.count}</strong></h4>
                <button type="button" className="btn btn-primary" onClick={()=>this.count1()}>Counter++</button>
                <button type="button" className="btn btn-secondary" onClick={()=>this.count2()}>Counter--</button>
                <button type="button" className="btn btn-primary" onClick={()=>this.count3()}>Reset</button>
            </div>
        )
    }
}
export default CounterTask;
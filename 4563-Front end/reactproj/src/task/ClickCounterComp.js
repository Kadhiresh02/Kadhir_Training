import React,{Component} from "react";
import MyHocComp from "../components/MyHocComp";
class ClickCounterComp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // count1=()=>{
    //     this.setState((prevState)=>({count:prevState.count+1}));
    // }
   
    render(){
        return (
            
            <div>
                <h1>Counter Click</h1>
                {/* <h4>Counter:<strong>{this.state.count}</strong></h4>
                <button type="button" className="btn btn-primary" onClick={()=>this.count1()}>Counter++</button> */}
                <h1>Counter Click</h1>
                <h4>Counter:<strong>{this.props.count}</strong></h4>
                <button type="button" className="btn btn-primary" onClick={this.props.incrementCounter}>Counter++</button>
            </div>
        )
    }
}
// export default ClickCounterComp;
export default MyHocComp(ClickCounterComp,3);
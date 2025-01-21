import React,{Component} from "react";
import MyHocComp from "../components/MyHocComp";
class HoverCounterComp extends Component{
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
                <h1>Counter Hover</h1>
                {/* <h4>Counter:<strong>{this.state.count}</strong></h4>
                <button type="button" className="btn btn-primary" onMouseOver={()=>this.count1()}>Counter++</button> */}
                <h4>Counter:<strong>{this.props.count}</strong></h4>
                <h2 onMouseOver={()=>this.props.incrementCounter()}>Hover to increment</h2>
            </div>
        )
    }
}
// export default HoverCounterComp;
export default MyHocComp(HoverCounterComp,5);
import React,{Component} from "react";

class EventComp extends Component{
    greeting=()=>{
        window.alert("Hello All!!");
    }
    welcome=(...std)=> 
    {
        window.alert(`Welcome ${std}`);
    };
    render(){
        return (
            <div>
                <h2>This is event Components</h2>
                <button type="button" onClick={this.greeting}>Call Greeting</button>
                <button type="button" onClick={()=>this.welcome("Kadhir","Dharun","Vinay")}>Call Welcome</button>
                <h2 onMouseOver={()=>this.welcome("Selva","Deva")}>Hover</h2>
            </div>
        )
    }
}
export default EventComp;
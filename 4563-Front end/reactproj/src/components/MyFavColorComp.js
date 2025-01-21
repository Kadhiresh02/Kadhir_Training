import React, { Component } from 'react'

 class MyFavColorComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"Red"
        }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newColor
    //     }
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"Pink"});
        },2000)
    }

    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Before Update:${prevState.color}`;
    }
    changeColor=()=>{
        this.setState({color:"Blue"});
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After Update:${this.state.color}`;
    }

    render() {
        return (
            <div>
                <h2>This is my favourite color Component</h2>   
                <p>my favourite color is <strong>{this.state.color}</strong></p>
                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
                <button type='button' onClick={()=>this.changeColor}>change Color</button>
            </div>
        )
    }
}

export default MyFavColorComp

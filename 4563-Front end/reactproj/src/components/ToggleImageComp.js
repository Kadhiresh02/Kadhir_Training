import React, { Component } from 'react';
import Lion from '../assets/images/lion.jpg';
import Horse from '../assets/images/horse.jpg';

class ToggleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkAnimal: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkAnimal: !prevState.checkAnimal 
        }));
    };

    render() {
        const { checkAnimal } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkAnimal ? Lion : Horse} alt={checkAnimal ? 'Lion' : 'Horse'} height='200px' width='300px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default ToggleImageComp;
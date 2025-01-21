import React, { Component } from 'react';
import Lion from '../assets/images/lion.jpg';
import Tiger from '../assets/images/tiger.jpg';
import Elephant from '../assets/images/elephant.jpg'; 

class MultipleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='300px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: Lion, alt: 'Lion' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Lion
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Tiger, alt: 'Tiger' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Tiger
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Elephant, alt: 'Elephant' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Elephant
                </button>
            </div>
        );
    }
}

export default MultipleImageComp;
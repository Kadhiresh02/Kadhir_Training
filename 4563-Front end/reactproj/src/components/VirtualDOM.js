import React, { Component } from "react";
class VirtualDOM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breakFast: [
                { id: 101, name: "Vadai", price: "30rs" },
                { id: 102, name: "Poori", price: "40rs" },
                { id: 103, name: "Pongal", price: "50rs" },
                { id: 104, name: "Dosai", price: "25rs" }
            ],
            courses: ["Javascript", "Java", "React", "Angular"]
        }
    }
    render() {
        const { breakFast, courses } = this.state;
        return (
            <div>
                <h2>This is VirtualDOM Component</h2>
                <ul>
                    {
                        breakFast.length > 0 && breakFast.map((val, index) => {
                            return <li key={val.id} >{val.name}--{val.price}</li>
                        })
                    }
                </ul>
                <hr></hr>
                <label>Select Courses:</label>
                <select>
                    {
                        courses.length > 0 && courses.map((val, index) => {
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
export default VirtualDOM;
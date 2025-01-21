import React, { Component } from 'react';

class EmpDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empid: 1, empname: 'Kadhir', emppost: 'Manager', empsal: 50000, empcontact: '9876543210', empaddress: 'Tirupur' },
                { empid: 2, empname: 'Selva', emppost: 'Developer', empsal: 40000, empcontact: '9876543211', empaddress: 'Chennai' },
                { empid: 3, empname: 'Kumar', emppost: 'Designer', empsal: 35000, empcontact: '9876543212', empaddress: 'Covai' },
                { empid: 4, empname: 'Divakar', emppost: 'HR', empsal: 45000, empcontact: '9876543213', empaddress: 'Erode' },
                { empid: 5, empname: 'Gowtham', emppost: 'Developer', empsal: 42000, empcontact: '9876543214', empaddress: 'Namakkal' },
                { empid: 6, empname: 'Saran', emppost: 'QA', empsal: 38000, empcontact: '9876543215', empaddress: 'Viluppuram' },
                { empid: 7, empname: 'David', emppost: 'Manager', empsal: 50000, empcontact: '9876543216', empaddress: 'Karur' },
                { empid: 8, empname: 'Lalith', emppost: 'Developer', empsal: 43000, empcontact: '9876543217', empaddress: 'Nilgiri' },
                { empid: 9, empname: 'James', emppost: 'Designer', empsal: 36000, empcontact: '9876543218', empaddress: 'Dindugul' },
                { empid: 10, empname: 'Hari', emppost: 'HR', empsal: 46000, empcontact: '9876543219', empaddress: 'Madurai' }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empname}</td>
                                <td>{employee.emppost}</td>
                                <td>{employee.empsal}</td>
                                <td>{employee.empcontact}</td>
                                <td>{employee.empaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpDetails;
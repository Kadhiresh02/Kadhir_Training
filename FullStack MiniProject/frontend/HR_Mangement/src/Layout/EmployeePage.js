import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/EmployeeComp.css';

const EmployeeComp = ({ loggedInEmail }) => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Fetch employee details based on the EmpId or email
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7193/api/employee/${loggedInEmail}`);
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Failed to fetch employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [loggedInEmail]);

  if (!employeeData) {
    return <div className="loading">Loading employee details...</div>;
  }

  return (
    <div className="employee-container">
      <div className="employee-card">
        <h2 className="employee-title">Employee Details</h2>
        <div className="employee-details">
          <p><span className="label">EmpId:</span> {employeeData.empId}</p>
          <p><span className="label">First Name:</span> {employeeData.firstName}</p>
          <p><span className="label">Last Name:</span> {employeeData.lastName}</p>
          <p><span className="label">Department:</span> {employeeData.department}</p>
          <p><span className="label">DOB:</span> {employeeData.dob}</p>
          <p><span className="label">Gender:</span> {employeeData.gender}</p>
          <p><span className="label">Email:</span> {employeeData.email}</p>
          <p><span className="label">Phone:</span> {employeeData.phone}</p>
        </div>
      </div>
    </div>
  );
};

const EmployeePage = () => {
  const { empId } = useParams();

  return <EmployeeComp loggedInEmail={empId} />;
};

export default EmployeePage;

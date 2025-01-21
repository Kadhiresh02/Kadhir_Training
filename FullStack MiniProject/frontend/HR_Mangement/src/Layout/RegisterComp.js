// src/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Style/RegisterComp.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Department: '',
        DOB: '',
        Gender: '',
        Email: '',
        Phone: '',
        Password: ''
    });

    const [message, setMessage] = useState(''); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7193/api/register', formData);
            console.log('Registration successful:', response.data);
            setMessage('Registration successful! Redirecting to login page...');
            // Optionally reset the form or redirect the user
            setTimeout(() => {
                navigate('/'); // Redirect to login page
            }, 2000);
        } catch (error) {
            console.error('There was an error registering!', error);
            setMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="register-title">Register</h2>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    className="form-input"
                    type="text"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input
                    className="form-input"
                    type="text"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Department:</label>
                <input
                    className="form-input"
                    type="text"
                    name="Department"
                    value={formData.Department}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Date of Birth:</label>
                <input
                    className="form-input"
                    type="date"
                    name="DOB"
                    value={formData.DOB}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <select
                    className="form-input"
                    name="Gender"
                    value={formData.Gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    className="form-input"
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                    className="form-input"
                    type="tel"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    className="form-input"
                    type="password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                />
            </div>
           
            <button className="form-button" type="submit">
                Register
            </button>
        </form>
        {message && <p className="message">{message}</p>}
        <a className="login-link" href="/">
            Login
        </a>
    </div>
    );
};

export default RegisterForm;
import React, { useState } from 'react';
import './RegisterComponent.css'; // স্টাইল করার জন্য CSS ফাইল

const RegistrationComponent = () => {
    // ফর্মের ডেটা এবং এরর মেসেজ রাখার জন্য state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    // ইনপুট ফিল্ডে কিছু লিখলে ডেটা আপডেট করার ফাংশন
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // ভ্যালিডেশন লজিক
    const validate = () => {
        let tempErrors = {};
        // Full Name ভ্যালিডেশন
        if (!formData.fullName) {
            tempErrors.fullName = "Enter your full name।";
        }

        // Email ভ্যালিডেশন
        if (!formData.email) {
            tempErrors.email = "Enter your email address।";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Right Email Address required।";
        }

        // Password ভ্যালিডেশন
        if (!formData.password) {
            tempErrors.password = "Password is required।";
        } else if (formData.password.length < 8) {
            tempErrors.password = "password must be at least 8 characters long।";
        }

        // Confirm Password ভ্যালিডেশন
        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = "Please confirm your password।";
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Password Doesn't Match।";
        }
        
        setErrors(tempErrors);

        // যদি কোনো এরর না থাকে, তবে true রিটার্ন করবে
        return Object.keys(tempErrors).length === 0;
    };


    // ফর্ম সাবমিট করার ফাংশন
    const handleSubmit = (e) => {
        e.preventDefault(); // পেইজ রিলোড হওয়া আটকানোর জন্য
        
        if (validate()) {
            // যদি ভ্যালিডেশন সফল হয়
            alert("Registration Successfully !");
            console.log("Form Data Submitted:", formData);
            // এখানে আপনি API তে ডেটা পাঠাতে পারেন
            
            // ফর্ম রিসেট করুন
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            setErrors({});
        } else {
            // যদি ভ্যালিডেশনে সমস্যা থাকে
            console.log("Validation Failed");
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Registration Form </h2>

                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label> Conform Your Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationComponent;
import React, { useState } from 'react';
import './Signup.css'; // Assuming you have your styles in a separate CSS file


const Signupchef = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [socialLinks, setSocialLinks] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    gender: "",
    date: "",
   
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let tempErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        break;
      case 2:
        if (!formData.address) tempErrors.address = "Address is required";
        if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone number is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.date) tempErrors.date = "Date is required";
        break;
     
      default:
        break;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateStep()) {
      alert("Your Form Successfully Signed up");
      window.location.reload();
    }
  };

  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  return (
    <div className='signup'>
      <div className="sign-container">
        <header>Registration</header>
        <div className="progress-bar">
          {["Name", "Contact"].map((label, index) => (
            <div className="step" key={index}>
              <p className={currentStep > index ? "active" : ""}>{label}</p>
              <div className={`bullet ${currentStep > index ? "active" : ""}`}>
                <span>{index + 1}</span>
              </div>
              <div className={`check fas fa-check ${currentStep > index ? "active" : ""}`}></div>
            </div>
          ))}
        </div>
        <div className="form-outer">
          <form action="#">
            <div className={`page ${currentStep === 1 ? "slide-page" : ""}`}>
              <div className="sign-title">Basic Info:</div>
              <div className="field">
                <div className="sign-label">Name</div>
                <input type="text" name="name" className="signup-input" value={formData.name} onChange={handleChange} required />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Email</div>
                <input type="email" name="email" className="signup-input" value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Password</div>
                <input type="password" name="password" className="signup-input " value={formData.password} onChange={handleChange} required />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Confirm Password</div>
                <input type="password" name="confirmPassword" className="signup-input" value={formData.confirmPassword} onChange={handleChange} required />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <div className="field">
                <button className="firstNext next" onClick={nextStep}>Next</button>
              </div>
            </div>

            <div className={`page ${currentStep === 2 ? "slide-page" : ""}`}>
              <div className="sign-title">Contact Info:</div>
              <div className="field">
                <div className="sign-label">Address</div>
                <input type="text" name="address" className="signup-input" value={formData.address} onChange={handleChange} required />
                {errors.address && <p className="error">{errors.address}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Phone Number</div>
                <input type="number" name="phoneNumber" className="signup-input" value={formData.phoneNumber} onChange={handleChange} required />
                {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Gender</div>
                <select name="gender" className="signup-input" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Birthdate</div>
                <input type="date" name="date" className="signup-input" value={formData.date} onChange={handleChange} required />
                {errors.date && <p className="error">{errors.date}</p>}
              </div>
              
              <div className="field btns">
                <button className="prev-3 prev" onClick={prevStep}>Previous</button>
                <button className="signup-submit" onClick={submitForm}>Submit</button>
              </div>
             
            </div>

          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signupchef;



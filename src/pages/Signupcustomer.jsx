import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosConfig from "../services/http";
import './Signup.css'; // Assuming you have your styles in a separate CSS file


const Signupchef = () => {
  const navigate = useNavigate();
  const notify = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const errorNotify = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const [currentStep, setCurrentStep] = useState(1);
  const [socialLinks, setSocialLinks] = useState([""]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    gender: "",
    birthDate: "",
    role: "CUSTOMER"
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let tempErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.firstName) tempErrors.firstName = "First name is required";
        if (!formData.lastName) tempErrors.lastName = "Last name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.role) tempErrors.role = "Role is required";
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        break;
      case 2:
        if (!formData.address) tempErrors.address = "Address is required";
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.birthDate) tempErrors.birthDate = "Birth date is required";
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

  const HandleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    console.log({formData})

    // Define the login data
    const loginData = {
      ...formData
    };

    // Send a POST request with the login data
    try {
      const response = await axiosConfig.post('auth/register', loginData);
      if (response.status === 200) {
        notify("User has been registered successfully");
        navigate("/login")
      }
    } catch (error) {
      errorNotify("User already");
      console.error('Error:', error);
    }
  }

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
          <form action="#" onSubmit={HandleSubmit}>
            <div className={`page ${currentStep === 1 ? "slide-page" : ""}`}>
              <div className="sign-title">Basic Info:</div>
              <div className="field">
                <div className="sign-label">First name</div>
                <input type="text" name="firstName" className="signup-input" value={formData.firstName} onChange={handleChange} required />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Last name</div>
                <input type="text" name="lastName" className="signup-input" value={formData.lastName} onChange={handleChange} required />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
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
                <div className="sign-label">Role</div>
                <select name="role" className="signup-input" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Role</option>
                  <option value="CUSTOMER">Customer</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="CHEF">CHEF</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}
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
                <input type="number" name="phone" className="signup-input" value={formData.phone} onChange={handleChange} required />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Gender</div>
                <select name="gender" className="signup-input" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Birthdate</div>
                <input type="date" name="birthDate" className="signup-input" value={formData.birthDate} onChange={handleChange} required />
                {errors.birthDate && <p className="error">{errors.birthDate}</p>}
              </div>
              
              <div className="field btns">
                <button className="prev-3 prev">Previous</button>
                <button className="signup-submit" type='submit'>Submit</button>
              </div>
             
            </div>

          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signupchef;



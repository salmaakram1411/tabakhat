import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../services/http';
import './Signup.css'; // Assuming you have your styles in a separate CSS file


const Signupchef = () => {
  const navigate = useNavigate();
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
    profilePicture: null,
    cv: null,
    description: "",
    paymentReceipt: null,
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
      case 3:
        if (!formData.profilePicture) tempErrors.profilePicture = "Profile picture is required";
        if (!formData.cv) tempErrors.cv = "CV is required";
        if (!formData.description) tempErrors.description = "Description is required";
        socialLinks.forEach((link, index) => {
          if (!link) tempErrors[`socialLink${index}`] = "Social platform link is required";
        });
        break;
      case 4:
        if (!formData.paymentReceipt) tempErrors.paymentReceipt = "Payment receipt is required";
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
    const name = formData.name?.split(" ");
    if (validateStep()) {
      axiosConfig.post("auth/register", {
        ...formData,
        firstName: name[0],
        lastName: name[1],
        phone: formData.phoneNumber,
        birthDate: formData.date,
        socialMediaPlatform: socialLinks,
        role: "CHEF",
      }).then(
        res => {
          if (res?.data?.msg === "User already exists") {
            alert(res.data.msg);
            return;
          }
          if (res?.data?.chefId) {
            const chefId = res.data.chefId;
            const cvFormData = new FormData();
            cvFormData.append("file", formData.cv)
            axiosConfig.post(`chef-cv/${chefId}`, cvFormData)
              .then(
                res => {
                  const imageFormData = new FormData();
                  imageFormData.append("image", formData.profilePicture);
                  axiosConfig.post(`chef-image/${chefId}`, imageFormData)
                    .then(
                      res => {
                        const receipt = new FormData();
                        receipt.append("file", formData.paymentReceipt)
                        axiosConfig.post(`chef-receipt/${chefId}`, receipt)
                          .then(
                            res => {
                              alert("Chef has been registered successfully");
                              window.location.href = "http://localhost:3001"
                            }
                          )
                      }
                    )
                }
              )
          }
        }
      )
    }
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, ""]);
  };

  const handleSocialLinkChange = (index, value) => {
    const newSocialLinks = socialLinks.map((link, i) => (i === index ? value : link));
    setSocialLinks(newSocialLinks);
  };

  const removeSocialLink = (index) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
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
          {["Name", "Contact", "Profile", "Submit"].map((label, index) => (
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
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
                {errors.gender && <p className="error">{errors.gender}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Birthdate</div>
                <input type="date" name="date" className="signup-input" value={formData.date} onChange={handleChange} required />
                {errors.date && <p className="error">{errors.date}</p>}
              </div>
              <div className="field btns">
                <button className="prev-1 prev" onClick={prevStep}>Previous</button>
                <button className="next-1 next" onClick={nextStep}>Next</button>
              </div>
            </div>

            <div className={`page ${currentStep === 3 ? "slide-page" : ""}`}>
              <div className="sign-title">Profile Info:</div>
              <div className="field">
                <div className="sign-label">Profile Picture</div>
                <input type="file" name="profilePicture" className="signup-input" onChange={handleChange} required />
                {errors.profilePicture && <p className="error">{errors.profilePicture}</p>}
              </div>
              <div className="field">
                <div className="sign-label">CV</div>
                <input type="file" name="cv" className="signup-input" onChange={handleChange} required />
                {errors.cv && <p className="error">{errors.cv}</p>}
              </div>
              <div className="field">
                <div className="sign-label">Social Platforms</div>
                {socialLinks.map((link, index) => (
                  <div key={index} className="social-link-field">
                    <input
                      type="url"
                      value={link}
                      className="signup-input"
                      onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                      placeholder="https://example.com"
                      required
                    />
                  </div>
                ))}
                <button type="button" onClick={addSocialLink}>Add Another Link</button>
              </div>
              <div className="field">
                <div className="sign-label">Description</div>
                <input type="text"className="signup-input"  name="description" value={formData.description} onChange={handleChange} required />
                {errors.description && <p className="error">{errors.description}</p>}
              </div>
              <div className="field btns">
                <button className="prev-2 prev" onClick={prevStep}>Previous</button>
                <button className="next-2 next" onClick={nextStep}>Next</button>
              </div>
            </div>

            <div className={`page ${currentStep === 4 ? "slide-page" : ""}`}>
              <div className="sign-title">Payment Details:</div>
              <div className="field">
                <div className="sign-label">Payment Receipt</div>
                <input type="file" className="signup-input"  name="paymentReceipt" onChange={handleChange} required />
                {errors.paymentReceipt && <p className="error">{errors.paymentReceipt}</p>}
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



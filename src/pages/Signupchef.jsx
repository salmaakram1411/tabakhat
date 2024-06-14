import React, { useState } from 'react';
import './Signup.css'; // Assuming you have your styles in a separate CSS file

const Signupchef = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    alert("Your Form Successfully Signed up");
    window.location.reload();
  };

  return (
    <div className='signup'>
    <div className="sign-container">
      <header>Signup Form</header>
      <div className="progress-bar">
        {["Name", "Contact", "Birth", "Submit"].map((label, index) => (
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
            <div className="title">Basic Info:</div>
            <div className="field">
              <div className="label">First Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <button className="firstNext next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 2 ? "slide-page" : ""}`}>
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input type="number" />
            </div>
            <div className="field btns">
              <button className="prev-1 prev" onClick={prevStep}>Previous</button>
              <button className="next-1 next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 3 ? "slide-page" : ""}`}>
            <div className="title">Date of Birth:</div>
            <div className="field">
              <div className="label">Date</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Gender</div>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field btns">
              <button className="prev-2 prev" onClick={prevStep}>Previous</button>
              <button className="next-2 next" onClick={nextStep}>Next</button>
            </div>
          </div>

          <div className={`page ${currentStep === 4 ? "slide-page" : ""}`}>
            <div className="title">Login Details:</div>
            <div className="field">
              <div className="label">Username</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Password</div>
              <input type="password" />
            </div>
            <div className="field btns">
              <button className="prev-3 prev" onClick={prevStep}>Previous</button>
              <button className="submit" onClick={submitForm}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signupchef;

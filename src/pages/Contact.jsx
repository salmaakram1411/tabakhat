import React from 'react';
import photo from '../assets/contactus.png';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
        <div className="contact-left-title">
          <h2>Get in touch</h2>
          <hr />
        </div>
        <input type="hidden" name="access_key" defaultValue="b393d815-49c1-42ea-975d-fc56f365e7df" />

        <input type="text" name="texr" placeholder="Your Name" className="contact-inputs" required />
        <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required />
        <textarea name="message" placeholder="Your Message" className="contact-inputs" required defaultValue={""} />
        <button type="submit">Submit</button> {/* Fixed the typo here */}
      </form>
      <div className="contact-right">
        <img src={photo} alt="Contact Us" /> {/* Added alt attribute for accessibility */}
      </div>
    </div>
  );
}

export default Contact;
